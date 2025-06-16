import React from 'react';
import { useTranslation } from 'react-i18next';
import './Farm.css';
import farmImage1 from '../assets/images/farm-1.jpg'; 
import farmImage2 from '../assets/images/farm-2.jpg';
import { FaTree, FaMapMarkerAlt, FaCalendarAlt, FaLeaf } from 'react-icons/fa';

const Farm = () => {
  const { t } = useTranslation('farm');

  const farmStats = [
    { icon: <FaTree />, value: t('stats.area'), label: t('stats.areaLabel') },
    { icon: <FaMapMarkerAlt />, value: t('stats.location'), label: t('stats.locationLabel') },
    { icon: <FaCalendarAlt />, value: t('stats.phase'), label: t('stats.phaseLabel') },
    { icon: <FaLeaf />, value: t('stats.practices'), label: t('stats.practicesLabel') }
  ];

  return (
    <div className="farm-page">
      {/* Hero Section */}
      <section
        className="farm-hero farm-hero-bg"
      >
        <div className="hero-overlay-box">
          <h1 className="hero-text">{t('hero.title')}</h1>
          <p className="hero-text">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Farm Overview */}
      <section className="farm-overview">
        <div className="overview-content">
          <h2>{t('overview.heading')}</h2>
          <p>{t('overview.description')}</p>
          <div className="stats-grid">
            {farmStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Development Timeline */}
      <section className="timeline-section">
        <h2>{t('timeline.title')}</h2>
        <div className="timeline">
          {[2026, 2027, 2031].map((year, idx) => (
            <div key={year} className="timeline-item">
              <div className="timeline-date">{year}</div>
              <div className="timeline-content">
                <h3>{t(`timeline.items.${idx}.title`)}</h3>
                <p>{t(`timeline.items.${idx}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>{t('gallery.title')}</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={farmImage1} alt={t('gallery.alt1')} />
          </div>
          <div className="gallery-item">
            <img src={farmImage2} alt={t('gallery.alt2')} />
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-section">
        <h2>{t('sustainability.title')}</h2>
        <div className="practices-grid">
          {[0, 1, 2].map((i) => (
            <div className="practice-card" key={i}>
              <h3>{t(`sustainability.items.${i}.title`)}</h3>
              <p>{t(`sustainability.items.${i}.description`)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Farm;