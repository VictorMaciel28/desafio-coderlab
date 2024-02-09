import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', controlHeader);
      }
    };
  }, [lastScrollY]);

  return (
    <div className={`header ${showHeader ? '' : 'header--hidden'}`}>
      <h3>Desafio Coderlab</h3>
    </div>
  );
};

export default Header;