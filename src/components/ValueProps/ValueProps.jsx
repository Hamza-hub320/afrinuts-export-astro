import React from 'react';
import './ValueProps.css';

// Icons (using react-icons - install with: npm install react-icons)
import { FaLeaf, FaHandshake, FaAward, FaChartLine } from 'react-icons/fa';

const ValueProps = () => {
  const valueCards = [
    {
      icon: <FaAward size={40} />,
      title: "Premium Quality",
      description: "Rigorously selected cashews from our 50-hectare family farm",
      color: "#4B352A", // Dark brown
      textColor: "#F0F2BD" // Cream
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Sustainable Farming",
      description: "Eco-friendly practices that protect Ivory Coast's ecosystem",
      color: "#B2CD9C", // Sage green
      textColor: "#4B352A" // Dark brown
    },
    {
      icon: <FaHandshake size={40} />,
      title: "Community Focus",
      description: "Empowering local farmers through fair partnerships",
      color: "#CA7842", // Rust orange
      textColor: "#F0F2BD" // Cream
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Growth Potential",
      description: "Processing facility coming in 2031 for value-added products",
      color: "#F0F2BD", // Cream
      textColor: "#4B352A" // Dark brown
    }
  ];

  return (
    <section className="value-props">
      <h2 className="section-title">Why Choose AfriNuts Export?</h2>
      <div className="value-grid">
        {valueCards.map((card, index) => (
          <div 
            key={index}
            className="value-card"
            style={{
              backgroundColor: card.color,
              color: card.textColor
            }}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;