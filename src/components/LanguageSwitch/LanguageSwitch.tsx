import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSwitch.scss';

const LanguageSwitch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, availableLanguages, switchLanguage } = useLanguage();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: typeof currentLanguage) => {
    switchLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-switch">
      <motion.button
        className="language-switch__trigger"
        onClick={toggleDropdown}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="language-switch__flag">{currentLanguage.flag}</span>
        <span className="language-switch__name">{currentLanguage.name}</span>
        <motion.span
          className="language-switch__icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="language-switch__dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {availableLanguages.map((language) => (
              <motion.button
                key={language.code}
                className={`language-switch__option ${
                  language.code === currentLanguage.code ? 'active' : ''
                }`}
                onClick={() => handleLanguageChange(language)}
                whileHover={{ backgroundColor: 'rgba(231, 76, 60, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="language-switch__option-flag">{language.flag}</span>
                <span className="language-switch__option-name">{language.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitch;

