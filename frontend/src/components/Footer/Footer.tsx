import React, { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`footer ${showFooter ? 'footer--visible' : ''}`}>
    </div>
  );
};

export default Footer;