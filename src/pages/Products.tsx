import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLeaf, FaSeedling, FaIndustry, FaWeightHanging } from 'react-icons/fa';
import './Products.css';

// Define types for your product data structure
interface Product {
    name: string;
    description: string;
    icon: keyof typeof iconMap;
    backgroundImage: string;
    features: string[];
    available: boolean;
    comingSoon?: string;
}

// Define types for your translation structure
interface ProductsTranslation {
    hero: {
        title: string;
        subtitle: string;
    };
    intro: {
        title: string;
        description: string;
    };
    items: Product[];
    buttons: {
        requestQuote: string;
    };
    cta: {
        title: string;
        subtitle: string;
        button: string;
    };
}

// Define the icon map with proper typing
const iconMap = {
    FaSeedling: FaSeedling,
    FaWeightHanging: FaWeightHanging,
    FaIndustry: FaIndustry,
    FaLeaf: FaLeaf,
} as const;

const Products: React.FC = () => {
    const { t } = useTranslation('products');
    const navigate = useNavigate();

    // Type the products array from translations
    const products = t('items', { returnObjects: true }) as Product[];

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <main className="products-page">
            {/* Hero Section */}
            <section className="products-hero products-hero-bg">
                <div className="hero-overlay-box">
                    <h1 className="hero-text">{t('hero.title')}</h1>
                    <p className="hero-text">{t('hero.subtitle')}</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="products-intro">
                <div className="intro-container">
                    <h2>{t('intro.title')}</h2>
                    <p>{t('intro.description')}</p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="products-grid-section">
                <div className="products-grid-container">
                    <div className="products-grid">
                        {products.map((product, index) => {
                            const Icon = iconMap[product.icon];
                            const bgImage = require(`../assets/images/${product.backgroundImage}`);

                            return (
                                <div
                                    key={index}
                                    className="modern-product-card"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    <div className="modern-product-content">
                                        <div className="product-header">
                                            <div className="product-icon-container">
                                                <Icon className="product-icon" />
                                            </div>
                                            <h3>{product.name}</h3>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-description">{product.description}</p>
                                            <ul className="modern-features-list">
                                                {product.features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="product-footer">
                                            {product.available ? (
                                                <button
                                                    className="modern-product-button"
                                                    onClick={handleContactClick}
                                                >
                                                    {t('buttons.requestQuote')}
                                                </button>
                                            ) : (
                                                <div className="coming-soon-container">
                                                    <span className="coming-soon-badge">{product.comingSoon}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="products-cta">
                <div className="cta-container">
                    <h2>{t('cta.title')}</h2>
                    <p>{t('cta.subtitle')}</p>
                    <button
                        className="cta-button"
                        onClick={handleContactClick}
                    >
                        {t('cta.button')}
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Products;