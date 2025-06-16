import React from 'react';
import './Products.css';
import { FaLeaf, FaSeedling, FaIndustry, FaWeightHanging } from 'react-icons/fa';

const Products = () => {
  const products = [
    {
      name: "Raw Cashew Nuts",
      description: "Premium quality raw cashews sourced directly from our farm and trusted local growers in Odienné",
      features: [
        "Grade A quality",
        "Sun-dried and carefully sorted",
        "Available in 50kg bags"
      ],
      icon: <FaSeedling className="product-icon" />,
      color: "#F0F2BD", // Cream
      textColor: "#4B352A", // Dark brown
      available: true
    },
    {
      name: "Cashew Kernels",
      description: "Processed cashew kernels ready for export, available in multiple grades",
      features: [
        "W320, W240, W180 grades available",
        "Manually inspected for quality",
        "Vacuum-packed for freshness"
      ],
      icon: <FaWeightHanging className="product-icon" />,
      color: "#B2CD9C", // Sage green
      textColor: "#4B352A", // Dark brown
      available: false,
      comingSoon: "Available from 2031"
    },
    {
      name: "Cashew Butter",
      description: "Creamy, organic cashew butter made from 100% Ivory Coast cashews",
      features: [
        "No additives or preservatives",
        "Rich in healthy fats and proteins",
        "Perfect for vegan diets"
      ],
      icon: <FaIndustry className="product-icon" />,
      color: "#CA7842", // Rust orange
      textColor: "#F0F2BD", // Cream
      available: false,
      comingSoon: "Coming in 2031"
    },
    {
      name: "Cashew Nut Shell Liquid",
      description: "Valuable by-product with industrial applications",
      features: [
        "Used in coatings and resins",
        "Industrial grade quality",
        "Available in bulk quantities"
      ],
      icon: <FaLeaf className="product-icon" />,
      color: "#4B352A", // Dark brown
      textColor: "#F0F2BD", // Cream
      available: false,
      comingSoon: "Production starts 2031"
    }
  ];

  return (
    <main className="products-page">
      <section className="products-header" style={{ backgroundColor: '#4B352A' }}>
        <h1 style={{ color: '#F0F2BD' }}>Our Products</h1>
        <p style={{ color: '#B2CD9C' }}>From our farm to your table - premium quality cashew products</p>
      </section>

      <section className="products-intro">
        <div className="intro-content">
          <h2 style={{ color: '#4B352A' }}>Quality You Can Trust</h2>
          <p style={{ color: '#4B352A' }}>
            AfriNuts Export specializes in premium cashew products, with our processing facility 
            launching in 2031 to provide value-added products. Currently we offer raw cashew nuts 
            sourced from our 50-hectare farm and trusted local growers in Ivory Coast.
          </p>
        </div>
      </section>

      <section className="products-grid-container">
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index}
              className="product-card"
              style={{
                backgroundColor: product.color,
                color: product.textColor,
                border: `1px solid ${product.textColor}`
              }}
            >
              <div className="product-icon-container">
                {product.icon}
              </div>
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              
              <ul className="product-features">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {product.available ? (
                <button 
                  className="product-button"
                  style={{
                    backgroundColor: product.textColor,
                    color: product.color
                  }}
                >
                  Request Quote
                </button>
              ) : (
                <div className="coming-soon" style={{ color: product.textColor }}>
                  {product.comingSoon}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="products-cta" style={{ backgroundColor: '#B2CD9C' }}>
        <h2 style={{ color: '#4B352A' }}>Interested in our products?</h2>
        <p style={{ color: '#4B352A' }}>Contact us for wholesale inquiries and pricing</p>
        <button 
          className="cta-button"
          style={{
            backgroundColor: '#CA7842',
            color: '#F0F2BD'
          }}
        >
          Get in Touch
        </button>
      </section>
    </main>
  );
};

export default Products;