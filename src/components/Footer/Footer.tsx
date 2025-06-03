import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWeixin, FaQq, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.scss';

const Footer: React.FC = () => {
  const { translations, currentLanguage } = useLanguage();

  const quickLinks = [
    { path: '/', label: translations.nav.home },
    { path: '/cities', label: translations.nav.cities },
    { path: '/visa-policy', label: translations.nav.visaPolicy },
    { path: '/travel-guide', label: translations.nav.travelGuide },
    { path: '/contact', label: translations.nav.contact }
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      text: '+86 400-123-4567'
    },
    {
      icon: <FaEnvelope />,
      text: 'info@chinatravelguide.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      text: currentLanguage.code === 'zh' ? '北京市朝阳区建国门外大街1号' : '1 Jianguomenwai Avenue, Chaoyang District, Beijing'
    }
  ];

  const socialLinks = [
    {
      icon: <FaWeixin />,
      label: currentLanguage.code === 'zh' ? '微信' : 'WeChat',
      href: '#'
    },
    {
      icon: <FaQq />,
      label: 'QQ',
      href: '#'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: '#'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* 品牌信息 */}
          <div className="footer__brand">
            <h3 className="footer__logo">
              {currentLanguage.code === 'zh' ? '中国旅游指南' : 'China Travel Guide'}
            </h3>
            <p className="footer__description">
              {currentLanguage.code === 'zh' 
                ? '为您提供最专业的中国旅游服务，让您的中国之旅更加精彩难忘。' 
                : 'Providing you with the most professional China travel services to make your China trip more exciting and memorable.'}
            </p>
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div className="footer__links">
            <h4 className="footer__title">
              {currentLanguage.code === 'zh' ? '快速链接' : 'Quick Links'}
            </h4>
            <ul className="footer__nav">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer__nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系信息 */}
          <div className="footer__contact">
            <h4 className="footer__title">
              {currentLanguage.code === 'zh' ? '联系我们' : 'Contact Us'}
            </h4>
            <ul className="footer__contact-list">
              {contactInfo.map((contact, index) => (
                <li key={index} className="footer__contact-item">
                  <span className="footer__contact-icon">{contact.icon}</span>
                  <span className="footer__contact-text">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 服务时间 */}
          <div className="footer__hours">
            <h4 className="footer__title">
              {currentLanguage.code === 'zh' ? '服务时间' : 'Service Hours'}
            </h4>
            <div className="footer__hours-content">
              <p>
                <strong>
                  {currentLanguage.code === 'zh' ? '工作日：' : 'Weekdays: '}
                </strong>
                9:00 - 18:00
              </p>
              <p>
                <strong>
                  {currentLanguage.code === 'zh' ? '周末：' : 'Weekends: '}
                </strong>
                10:00 - 16:00
              </p>
              <p className="footer__emergency">
                {currentLanguage.code === 'zh' 
                  ? '24小时紧急联系：+86 138-0000-0000' 
                  : '24h Emergency: +86 138-0000-0000'}
              </p>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>
              © 2024 {currentLanguage.code === 'zh' ? '中国旅游指南' : 'China Travel Guide'}. 
              {currentLanguage.code === 'zh' ? ' 保留所有权利。' : ' All rights reserved.'}
            </p>
          </div>
          <div className="footer__legal">
            <Link to="#" className="footer__legal-link">
              {currentLanguage.code === 'zh' ? '隐私政策' : 'Privacy Policy'}
            </Link>
            <Link to="#" className="footer__legal-link">
              {currentLanguage.code === 'zh' ? '服务条款' : 'Terms of Service'}
            </Link>
            <Link to="#" className="footer__legal-link">
              {currentLanguage.code === 'zh' ? '免责声明' : 'Disclaimer'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

