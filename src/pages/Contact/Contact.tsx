import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWeixin, FaQq } from 'react-icons/fa';
import './Contact.scss';

const Contact: React.FC = () => {
  const { translations, currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(currentLanguage.code === 'zh' ? '消息已发送！' : 'Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: currentLanguage.code === 'zh' ? '电话' : 'Phone',
      content: '+86 400-123-4567',
      description: currentLanguage.code === 'zh' ? '工作日 9:00-18:00' : 'Weekdays 9:00-18:00'
    },
    {
      icon: <FaEnvelope />,
      title: currentLanguage.code === 'zh' ? '邮箱' : 'Email',
      content: 'info@chinatravelguide.com',
      description: currentLanguage.code === 'zh' ? '24小时内回复' : 'Reply within 24 hours'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: currentLanguage.code === 'zh' ? '地址' : 'Address',
      content: currentLanguage.code === 'zh' ? '北京市朝阳区建国门外大街1号' : '1 Jianguomenwai Avenue, Chaoyang District, Beijing',
      description: currentLanguage.code === 'zh' ? '总部办公室' : 'Headquarters Office'
    },
    {
      icon: <FaClock />,
      title: currentLanguage.code === 'zh' ? '营业时间' : 'Business Hours',
      content: currentLanguage.code === 'zh' ? '周一至周五 9:00-18:00' : 'Mon-Fri 9:00-18:00',
      description: currentLanguage.code === 'zh' ? '周末及节假日休息' : 'Closed on weekends and holidays'
    }
  ];

  const socialContacts = [
    {
      icon: <FaWeixin />,
      platform: currentLanguage.code === 'zh' ? '微信' : 'WeChat',
      handle: 'ChinaTravelGuide',
      description: currentLanguage.code === 'zh' ? '扫码添加客服微信' : 'Scan to add customer service WeChat'
    },
    {
      icon: <FaQq />,
      platform: 'QQ',
      handle: '123456789',
      description: currentLanguage.code === 'zh' ? '在线客服QQ' : 'Online customer service QQ'
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="contact__title">{translations.nav.contact}</h1>
          <p className="contact__subtitle">
            {currentLanguage.code === 'zh' 
              ? '我们随时为您提供帮助和支持' 
              : 'We are here to help and support you anytime'}
          </p>
        </motion.div>

        <div className="contact__content">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>{currentLanguage.code === 'zh' ? '联系信息' : 'Contact Information'}</h2>
            <div className="contact__info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact__info-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="contact__info-icon">{info.icon}</div>
                  <div className="contact__info-content">
                    <h3>{info.title}</h3>
                    <p className="contact__info-main">{info.content}</p>
                    <p className="contact__info-desc">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact__social">
              <h3>{currentLanguage.code === 'zh' ? '社交媒体联系' : 'Social Media Contact'}</h3>
              <div className="contact__social-grid">
                {socialContacts.map((social, index) => (
                  <motion.div
                    key={index}
                    className="contact__social-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="contact__social-icon">{social.icon}</div>
                    <div className="contact__social-content">
                      <h4>{social.platform}</h4>
                      <p className="contact__social-handle">{social.handle}</p>
                      <p className="contact__social-desc">{social.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact__form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>{currentLanguage.code === 'zh' ? '发送消息' : 'Send Message'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  {currentLanguage.code === 'zh' ? '姓名' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={currentLanguage.code === 'zh' ? '请输入您的姓名' : 'Enter your name'}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  {currentLanguage.code === 'zh' ? '邮箱' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={currentLanguage.code === 'zh' ? '请输入您的邮箱' : 'Enter your email'}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">
                  {currentLanguage.code === 'zh' ? '主题' : 'Subject'}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={currentLanguage.code === 'zh' ? '请输入消息主题' : 'Enter message subject'}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  {currentLanguage.code === 'zh' ? '消息' : 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={currentLanguage.code === 'zh' ? '请输入您的消息内容' : 'Enter your message'}
                  rows={6}
                  required
                />
              </div>
              <button type="submit" className="btn btn--primary">
                {currentLanguage.code === 'zh' ? '发送消息' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="contact__map"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>{currentLanguage.code === 'zh' ? '找到我们' : 'Find Us'}</h2>
          <div className="contact__map-container">
            <div className="contact__map-placeholder">
              <FaMapMarkerAlt />
              <p>{currentLanguage.code === 'zh' ? '地图加载中...' : 'Loading map...'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

