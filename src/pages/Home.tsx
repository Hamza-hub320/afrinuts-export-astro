import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Home.css';
// @ts-ignore
import heroImage from '../assets/images/hero.jpg';
import farmImage from '../assets/images/farm.jpg';
import productsImage from '../assets/images/products.jpg';
import sustainabilityImage from '../assets/images/sustainability.jpg';
import newsImage from '../assets/images/news.jpg';
import {
  FaChevronDown, FaLeaf, FaSeedling,
  FaGlobeAfrica, FaNewspaper, FaEnvelope
} from 'react-icons/fa';

const Home: React.FC = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div className="home-page">
        {/* 1. Hero Section */}
        <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-overlay">
            <h1>{t('hero.welcome')}</h1>
            <p>{t('hero.tagline')}</p>
            <div className="hero-buttons">
              <button className="primary-button" onClick={() => navigate('/about')}>
                {t('hero.learnMore')}
              </button>
              <button className="secondary-button" onClick={() => navigate('/contact')}>
                {t('hero.contact')}
              </button>
            </div>
            <div className="scroll-indicator" onClick={() => scrollToSection('about-preview')}>
              <span>{t('hero.viewStory')}</span>
              <FaChevronDown className="bounce" />
            </div>
          </div>
        </section>

        {/* 2. About Preview Section */}
        <section id="about-preview" className="section about-preview">
          <div className="section-container">
            <div className="section-icon">
              <FaGlobeAfrica />
            </div>
            <div className="section-content">
              <h2>{t('aboutPreview.title')}</h2>
              <p>{t('aboutPreview.description')}</p>
              <button className="primary-button" onClick={() => navigate('/about')}>
                {t('aboutPreview.readMore')}
              </button>
            </div>
          </div>
        </section>

        {/* 3. Products Showcase */}
        <section className="section products-showcase" style={{ backgroundImage: `url(${productsImage})` }}>
          <div className="section-container">
            <div className="section-icon">
              <FaSeedling />
            </div>
            <div className="section-content">
              <div className="showcase-overlay-box showcase-text">
                <h2>{t('products.title')}</h2>
                <p>{t('products.description')}</p>
                <button className="secondary-button" onClick={() => navigate('/products')}>
                  {t('products.viewProducts')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Farm Story */}
        <section className="section farm-story">
          <div className="section-container">
            <div className="section-content">
              <h2>{t('farm.title')}</h2>
              <p>{t('farm.description')}</p>
              <button className="primary-button" onClick={() => navigate('/farm')}>
                {t('farm.visitFarm')}
              </button>
            </div>
            <div className="section-image">
              <img src={farmImage} alt="AfriNuts Farm" />
            </div>
          </div>
        </section>

        {/* 5. Sustainability */}
        <section className="section sustainability" style={{ backgroundImage: `url(${sustainabilityImage})` }}>
          <div className="section-container">
            <div className="section-icon">
              <FaLeaf />
            </div>
            <div className="section-content">
              <div className="sustainability-overlay-box showcase-text">
                <h2>{t('sustainability.title')}</h2>
                <p>{t('sustainability.description')}</p>
                <button className="secondary-button" onClick={() => navigate('/sustainability')}>
                  {t('sustainability.learnMore')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. News & Updates */}
        <section className="section news-updates">
          <div className="section-container">
            <div className="section-icon">
              <FaNewspaper />
            </div>
            <div className="section-content">
              <h2>{t('news.title')}</h2>
              <p>{t('news.description')}</p>
              <button className="primary-button" onClick={() => navigate('/news')}>
                {t('news.readMore')}
              </button>
            </div>
            <div className="news-image">
              <img src={newsImage} alt="News & Updates" />
            </div>
          </div>
        </section>

        {/* 7. Contact CTA */}
        <section className="section contact-cta">
          <div className="section-container">
            <div className="section-icon">
              <FaEnvelope />
            </div>
            <div className="section-content">
              <h2>{t('contact.title')}</h2>
              <p>{t('contact.description')}</p>
              <button className="secondary-button" onClick={() => navigate('/contact')}>
                {t('contact.getInTouch')}
              </button>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Home;