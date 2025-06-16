// src/components/Navbar/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/afrinuts-export-official-logo.png';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const location = useLocation();
  const [click, setClick] = useState<boolean>(false);
  const [languageLabel, setLanguageLabel] = useState<string>('');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
    setLanguageLabel(newLang === 'en' ? 'FR' : 'EN');
  };

  useEffect(() => {
    setLanguageLabel(i18n.language === 'en' ? 'FR' : 'EN');
  }, [i18n.language]);

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems: { path: string; label: string }[] = [
    // { path: '/', label: t('navbar.home') },
    { path: '/about', label: t('navbar.about') },
    { path: '/products', label: t('navbar.products') },
    { path: '/farm', label: t('navbar.farm') },
    { path: '/contact', label: t('navbar.contact') },
  ];

  const handleClick = (): void => {
    setClick(!click);
    document.body.classList.toggle('menu-open', !click);
  };

  const closeMobileMenu = (): void => {
    setClick(false);
    document.body.classList.remove('menu-open');
  };

  return (
      <nav className="navbar navbar-rounded">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="AfriNuts Export Logo" className="nav-logo-img" />
            <span className="logo-text">AfriNuts Export</span>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                      to={item.path}
                      className={`nav-links ${isActive(item.path) ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                  >
                    {item.label}
                    {isActive(item.path) && <span className="visually-hidden">(current)</span>}
                  </Link>
                </li>
            ))}
          </ul>

          {/* Language Toggle */}
          <button className="navbar-lang-toggle" onClick={toggleLanguage}>
            <FaGlobe />
            <span>{languageLabel}</span>
          </button>
        </div>
      </nav>
  );
};

export default Navbar;