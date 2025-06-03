import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import './Header.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: translations.nav.home },
    { path: '/cities', label: translations.nav.cities },
    { path: '/visa-policy', label: translations.nav.visaPolicy },
    { path: '/travel-guide', label: translations.nav.travelGuide },
    { path: '/contact', label: translations.nav.contact }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <Link to="/" className="header__logo" onClick={closeMenu}>
            <motion.span 
              className="header__logo-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              China Travel
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav desktop-nav">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="header__nav-item">
                  <Link 
                    to={item.path} 
                    className={`header__nav-link ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Switch & Mobile Menu Button */}
          <div className="header__actions">
            <LanguageSwitch />
            
            <button 
              className="header__menu-toggle mobile-only"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="header__mobile-nav mobile-only"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="header__mobile-nav-list">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.path} 
                    className="header__mobile-nav-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.path} 
                      className={`header__mobile-nav-link ${
                        location.pathname === item.path ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

