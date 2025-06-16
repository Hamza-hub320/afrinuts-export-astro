import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Premium Cashews from Ivory Coast</h1>
        <p className="hero-subtitle">Sustainably grown on our 50-hectare family farm in Odienné</p>
        <div className="hero-buttons">
          <button className="cta-button primary">Explore Our Products</button>
          <button className="cta-button secondary">Contact Us</button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;