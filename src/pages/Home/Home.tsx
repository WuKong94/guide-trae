import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt, FaClock, FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Home.scss';

const Home: React.FC = () => {
  const { translations, currentLanguage } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 轮播图数据
  const bannerSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: currentLanguage.code === 'zh' ? '探索神秘的紫禁城' : 'Explore the Mysterious Forbidden City',
      subtitle: currentLanguage.code === 'zh' ? '感受600年皇家历史的厚重与辉煌' : 'Experience 600 years of royal history and glory',
      location: currentLanguage.code === 'zh' ? '北京' : 'Beijing'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: currentLanguage.code === 'zh' ? '漫步浪漫外滩' : 'Stroll Along the Romantic Bund',
      subtitle: currentLanguage.code === 'zh' ? '在黄浦江畔感受东西方文化的完美融合' : 'Feel the perfect blend of Eastern and Western cultures by the Huangpu River',
      location: currentLanguage.code === 'zh' ? '上海' : 'Shanghai'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: currentLanguage.code === 'zh' ? '品味千年古都' : 'Taste the Millennium Ancient Capital',
      subtitle: currentLanguage.code === 'zh' ? '在兵马俑的守护下穿越历史长河' : 'Travel through history under the protection of the Terracotta Army',
      location: currentLanguage.code === 'zh' ? '西安' : "Xi'an"
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: currentLanguage.code === 'zh' ? '邂逅天府之国' : 'Encounter the Land of Abundance',
      subtitle: currentLanguage.code === 'zh' ? '在熊猫故乡体验悠闲慢生活' : 'Experience leisurely slow life in the hometown of pandas',
      location: currentLanguage.code === 'zh' ? '成都' : 'Chengdu'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: currentLanguage.code === 'zh' ? '醉美西湖风光' : 'Enchanting West Lake Scenery',
      subtitle: currentLanguage.code === 'zh' ? '在人间天堂感受诗画江南的温柔' : 'Feel the gentleness of poetic Jiangnan in paradise on earth',
      location: currentLanguage.code === 'zh' ? '杭州' : 'Hangzhou'
    }
  ];

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000); // 5秒切换一次

    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  // 手动切换
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const cities = [
    {
      id: 'beijing',
      name: '北京',
      nameEn: 'Beijing',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '中国的首都，拥有丰富的历史遗产',
      descriptionEn: 'Capital of China with rich historical and cultural heritage'
    },
    {
      id: 'shanghai',
      name: '上海',
      nameEn: 'Shanghai',
      image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '国际化大都市，现代与传统的完美融合',
      descriptionEn: 'International metropolis, perfect blend of modern and traditional'
    },
    {
      id: 'guangzhou',
      name: '广州',
      nameEn: 'Guangzhou',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '南方门户，美食之都',
      descriptionEn: 'Southern gateway and culinary capital'
    },
    {
      id: 'chengdu',
      name: '成都',
      nameEn: 'Chengdu',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '天府之国，熊猫故乡',
      descriptionEn: 'Land of abundance and home of pandas'
    },
    {
      id: 'hangzhou',
      name: '杭州',
      nameEn: 'Hangzhou',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '人间天堂，西湖美景',
      descriptionEn: 'Paradise on earth with beautiful West Lake'
    }
  ];

  const features = [
    {
      icon: <FaClock />,
      title: '144小时免签',
      titleEn: '144-Hour Visa-Free',
      description: '无需签证，轻松入境',
      descriptionEn: 'No visa required, easy entry'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: '5个精选城市',
      titleEn: '5 Featured Cities',
      description: '探索中国最美目的地',
      descriptionEn: 'Explore China\'s most beautiful destinations'
    },
    {
      icon: <FaUsers />,
      title: '专业服务',
      titleEn: 'Professional Service',
      description: '24/7客户支持',
      descriptionEn: '24/7 customer support'
    }
  ];

  return (
    <div className="home">
      {/* Hero Carousel Section */}
      <section className="hero-carousel">
        <div className="carousel-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="carousel-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="slide-background"
                style={{ backgroundImage: `url(${bannerSlides[currentSlide].image})` }}
              >
                <div className="slide-overlay"></div>
              </div>
              <div className="container">
                <div className="slide-content">
                  <motion.div
                    className="slide-location"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <FaMapMarkerAlt />
                    {bannerSlides[currentSlide].location}
                  </motion.div>
                  <motion.h1 
                    className="slide-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {bannerSlides[currentSlide].title}
                  </motion.h1>
                  <motion.p 
                    className="slide-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {bannerSlides[currentSlide].subtitle}
                  </motion.p>
                  <motion.div 
                    className="slide-actions"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Link to="/cities" className="btn btn--primary">
                      {translations.hero.cta}
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 导航按钮 */}
          <button className="carousel-nav carousel-nav--prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="carousel-nav carousel-nav--next" onClick={nextSlide}>
            <FaChevronRight />
          </button>

          {/* 指示器 */}
          <div className="carousel-indicators">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="features__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="features__title">
              {currentLanguage.code === 'zh' ? '我们的特色服务' : 'Our Features'}
            </h2>
            <p className="features__subtitle">{translations.features.subtitle}</p>
          </motion.div>
          <div className="features__grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-card__icon">{feature.icon}</div>
                <h3 className="feature-card__title">
                  {currentLanguage.code === 'zh' ? feature.title : feature.titleEn}
                </h3>
                <p className="feature-card__description">
                  {currentLanguage.code === 'zh' ? feature.description : feature.descriptionEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="cities">
        <div className="container">
          <motion.div 
            className="cities__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cities__title">{translations.cities.title}</h2>
            <p className="cities__subtitle">{translations.cities.subtitle}</p>
          </motion.div>
          <div className="cities__grid">
            {cities.slice(0, 4).map((city, index) => (
              <motion.div 
                key={city.id}
                className="city-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="city-card__image">
                  <img src={city.image} alt={city.name} />
                  <div className="city-card__overlay"></div>
                </div>
                <div className="city-card__content">
                  <h3 className="city-card__name">
                    {currentLanguage.code === 'zh' ? city.name : city.nameEn}
                  </h3>
                  <p className="city-card__description">
                    {currentLanguage.code === 'zh' ? city.description : city.descriptionEn}
                  </p>
                  <Link to={`/cities#${city.id}`} className="city-card__link">
                    {translations.common.learnMore}
                    <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="cities__actions"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/cities" className="btn btn--outline">
              {translations.cities.viewAll}
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

