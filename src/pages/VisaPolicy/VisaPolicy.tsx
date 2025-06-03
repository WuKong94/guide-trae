import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaPassport, FaClock, FaGlobe, FaCheckCircle } from 'react-icons/fa';
import './VisaPolicy.scss';

const VisaPolicy: React.FC = () => {
  const { translations, currentLanguage } = useLanguage();

  const visaTypes = [
    {
      type: currentLanguage.code === 'zh' ? 'L签证' : 'L Visa',
      purpose: currentLanguage.code === 'zh' ? '旅游' : 'Tourism',
      duration: currentLanguage.code === 'zh' ? '30天' : '30 days',
      description: currentLanguage.code === 'zh' ? '适用于来华旅游的外国人' : 'For foreigners visiting China for tourism'
    },
    {
      type: currentLanguage.code === 'zh' ? 'F签证' : 'F Visa',
      purpose: currentLanguage.code === 'zh' ? '商务访问' : 'Business Visit',
      duration: currentLanguage.code === 'zh' ? '90天' : '90 days',
      description: currentLanguage.code === 'zh' ? '适用于来华进行商务活动的外国人' : 'For foreigners visiting China for business activities'
    },
    {
      type: currentLanguage.code === 'zh' ? 'X签证' : 'X Visa',
      purpose: currentLanguage.code === 'zh' ? '学习' : 'Study',
      duration: currentLanguage.code === 'zh' ? '1年' : '1 year',
      description: currentLanguage.code === 'zh' ? '适用于来华学习的外国人' : 'For foreigners coming to China for study'
    },
    {
      type: currentLanguage.code === 'zh' ? 'Z签证' : 'Z Visa',
      purpose: currentLanguage.code === 'zh' ? '工作' : 'Work',
      duration: currentLanguage.code === 'zh' ? '90天' : '90 days',
      description: currentLanguage.code === 'zh' ? '适用于来华工作的外国人' : 'For foreigners coming to China for work'
    }
  ];

  const eligibleCountries = [
    currentLanguage.code === 'zh' ? '美国' : 'United States',
    currentLanguage.code === 'zh' ? '加拿大' : 'Canada',
    currentLanguage.code === 'zh' ? '英国' : 'United Kingdom',
    currentLanguage.code === 'zh' ? '法国' : 'France',
    currentLanguage.code === 'zh' ? '德国' : 'Germany',
    currentLanguage.code === 'zh' ? '意大利' : 'Italy',
    currentLanguage.code === 'zh' ? '西班牙' : 'Spain',
    currentLanguage.code === 'zh' ? '荷兰' : 'Netherlands',
    currentLanguage.code === 'zh' ? '比利时' : 'Belgium',
    currentLanguage.code === 'zh' ? '瑞士' : 'Switzerland',
    currentLanguage.code === 'zh' ? '奥地利' : 'Austria',
    currentLanguage.code === 'zh' ? '瑞典' : 'Sweden',
    currentLanguage.code === 'zh' ? '挪威' : 'Norway',
    currentLanguage.code === 'zh' ? '丹麦' : 'Denmark',
    currentLanguage.code === 'zh' ? '芬兰' : 'Finland',
    currentLanguage.code === 'zh' ? '澳大利亚' : 'Australia',
    currentLanguage.code === 'zh' ? '新西兰' : 'New Zealand',
    currentLanguage.code === 'zh' ? '日本' : 'Japan',
    currentLanguage.code === 'zh' ? '韩国' : 'South Korea',
    currentLanguage.code === 'zh' ? '新加坡' : 'Singapore'
  ];

  const requirements = [
    {
      title: currentLanguage.code === 'zh' ? '有效护照' : 'Valid Passport',
      description: currentLanguage.code === 'zh' ? '护照有效期至少6个月' : 'Passport valid for at least 6 months'
    },
    {
      title: currentLanguage.code === 'zh' ? '往返机票' : 'Round-trip Ticket',
      description: currentLanguage.code === 'zh' ? '确认的往返机票或船票' : 'Confirmed round-trip air or ship ticket'
    },
    {
      title: currentLanguage.code === 'zh' ? '第三国签证' : 'Third Country Visa',
      description: currentLanguage.code === 'zh' ? '前往第三国的有效签证或机票' : 'Valid visa or ticket to a third country'
    },
    {
      title: currentLanguage.code === 'zh' ? '住宿证明' : 'Accommodation Proof',
      description: currentLanguage.code === 'zh' ? '酒店预订确认或邀请函' : 'Hotel booking confirmation or invitation letter'
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: currentLanguage.code === 'zh' ? '在线申请' : 'Online Application',
      description: currentLanguage.code === 'zh' ? '填写在线申请表格' : 'Fill out online application form'
    },
    {
      step: 2,
      title: currentLanguage.code === 'zh' ? '准备材料' : 'Prepare Documents',
      description: currentLanguage.code === 'zh' ? '准备所需的申请材料' : 'Prepare required application documents'
    },
    {
      step: 3,
      title: currentLanguage.code === 'zh' ? '提交申请' : 'Submit Application',
      description: currentLanguage.code === 'zh' ? '到领事馆或签证中心提交' : 'Submit to consulate or visa center'
    },
    {
      step: 4,
      title: currentLanguage.code === 'zh' ? '等待审批' : 'Wait for Approval',
      description: currentLanguage.code === 'zh' ? '等待签证审批结果' : 'Wait for visa approval result'
    },
    {
      step: 5,
      title: currentLanguage.code === 'zh' ? '领取签证' : 'Collect Visa',
      description: currentLanguage.code === 'zh' ? '领取签证并检查信息' : 'Collect visa and check information'
    }
  ];

  return (
    <div className="visa-policy">
      <div className="container">
        <motion.div
          className="visa-policy__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="visa-policy__title">{translations.visaPolicy.title}</h1>
          <p className="visa-policy__subtitle">{translations.visaPolicy.subtitle}</p>
        </motion.div>

        <div className="visa-policy__content">
          <motion.section
            className="visa-policy__section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="visa-policy__section-header">
              <FaPassport className="visa-policy__section-icon" />
              <h2>{currentLanguage.code === 'zh' ? '签证类型' : 'Visa Types'}</h2>
            </div>
            <div className="visa-policy__visa-types">
              {visaTypes.map((visa, index) => (
                <motion.div
                  key={index}
                  className="visa-policy__visa-card"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <h3>{visa.type}</h3>
                  <div className="visa-policy__visa-info">
                    <p><strong>{currentLanguage.code === 'zh' ? '用途:' : 'Purpose:'}</strong> {visa.purpose}</p>
                    <p><strong>{translations.visaPolicy.duration}:</strong> {visa.duration}</p>
                    <p>{visa.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="visa-policy__section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="visa-policy__section-header">
              <FaGlobe className="visa-policy__section-icon" />
              <h2>{translations.visaPolicy.countries}</h2>
            </div>
            <div className="visa-policy__countries">
              {eligibleCountries.map((country, index) => (
                <motion.span
                  key={index}
                  className="visa-policy__country"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  {country}
                </motion.span>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="visa-policy__section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="visa-policy__section-header">
              <FaCheckCircle className="visa-policy__section-icon" />
              <h2>{translations.visaPolicy.requirements}</h2>
            </div>
            <div className="visa-policy__requirements">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  className="visa-policy__requirement"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <FaCheckCircle className="visa-policy__requirement-icon" />
                  <div>
                    <h3>{req.title}</h3>
                    <p>{req.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="visa-policy__section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="visa-policy__section-header">
              <FaClock className="visa-policy__section-icon" />
              <h2>{translations.visaPolicy.process}</h2>
            </div>
            <div className="visa-policy__process">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="visa-policy__step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <div className="visa-policy__step-number">{step.step}</div>
                  <div className="visa-policy__step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default VisaPolicy;

