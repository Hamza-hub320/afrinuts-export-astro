import React, { useState, useEffect } from 'react';
import { FaFont, FaEye, FaUniversalAccess } from 'react-icons/fa';
import './AccessibilityToolbar.css';

const AccessibilityToolbar = () => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedFontSize = localStorage.getItem('accessibilityFontSize');
    const savedContrast = localStorage.getItem('highContrastMode');
    
    if (savedFontSize) {
      setFontSize(Number(savedFontSize));
      document.documentElement.style.fontSize = `${savedFontSize}%`;
    }
    
    if (savedContrast === 'true') {
      setHighContrast(true);
      document.body.classList.add('high-contrast');
    }
  }, []);

  const updateFontSize = (newSize) => {
    newSize = Math.max(80, Math.min(newSize, 150));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    localStorage.setItem('accessibilityFontSize', newSize);
  };

  const toggleContrast = () => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    document.body.classList.toggle('high-contrast');
    localStorage.setItem('highContrastMode', newContrast);
  };

  return (
    <div className={`accessibility-toolbar ${isOpen ? 'open' : ''}`}>
      <button 
        className="toolbar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close accessibility toolbar" : "Open accessibility toolbar"}
      >
        <FaUniversalAccess />
      </button>
      
      {isOpen && (
        <div className="toolbar-options">
          <div className="font-controls">
            <button 
              onClick={() => updateFontSize(fontSize - 10)} 
              aria-label="Decrease font size"
              disabled={fontSize <= 100}
            >
              <FaFont /> A-
            </button>
            <span className="font-size-display">{fontSize}%</span>
            <button 
              onClick={() => updateFontSize(fontSize + 10)} 
              aria-label="Increase font size"
              disabled={fontSize >= 150}
            >
              <FaFont /> A+
            </button>
          </div>
          
          <button 
            onClick={toggleContrast}
            className={highContrast ? 'active' : ''}
            aria-label={highContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
          >
            <FaEye /> High Contrast
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar;