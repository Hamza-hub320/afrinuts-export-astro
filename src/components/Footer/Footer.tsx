import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t } = useTranslation('footer');

  return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <h3 className="footer-heading">{t('company.title')}</h3>
              <p className="footer-text">{t('company.description')}</p>
              <div className="footer-social">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-heading">{t('links.title')}</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/about">{t('links.about')}</Link>
                </li>
                <li>
                  <Link to="/products">{t('links.products')}</Link>
                </li>
                <li>
                  <Link to="/farm">{t('links.farm')}</Link>
                </li>
                <li>
                  <Link to="/sustainability">{t('links.sustainability')}</Link>
                </li>
                <li>
                  <Link to="/contact">{t('links.contact')}</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-heading">{t('contact.title')}</h3>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>Odienné, Côte D'Ivoire</span>
                </li>
                <li>
                  <FaPhone />
                  <span>+225 XX XX XX XX</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>info@afrinuts-export.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-section">
              <h3 className="footer-heading">{t('newsletter.title')}</h3>
              <p className="footer-text">{t('newsletter.description')}</p>
              <form className="footer-newsletter">
                <input
                    type="email"
                    placeholder={t('newsletter.placeholder')}
                    required
                />
                <button type="submit">{t('newsletter.button')}</button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} AfriNuts Export. {t('copyright')}</p>
            <div className="footer-legal">
              <Link to="/privacy">{t('legal.privacy')}</Link>
              <Link to="/terms">{t('legal.terms')}</Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;