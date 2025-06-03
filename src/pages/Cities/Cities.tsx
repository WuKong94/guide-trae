import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './Cities.scss';
import { Link } from 'react-router-dom';

const Cities: React.FC = () => {
  const { translations, currentLanguage } = useLanguage();

  const cities = [
    {
      id: 'beijing', // 改为字符串 ID
      name: '北京',
      nameEn: 'Beijing',
      description: '中国的首都，拥有丰富的历史遗产',
      descriptionEn: 'Capital of China with rich historical and cultural heritage',
      image: '/images/beijing.jpg',
      attractions: ['故宫', '长城', '天安门广场'],
      attractionsEn: ['Forbidden City', 'Great Wall', 'Tiananmen Square']
    },
    {
      id: 'shanghai', // 改为字符串 ID
      name: '上海',
      nameEn: 'Shanghai',
      description: '国际化大都市，现代与传统完美融合',
      descriptionEn: 'International metropolis with perfect blend of modern and traditional',
      image: '/images/shanghai.jpg',
      attractions: ['外滩', '东方明珠', '豫园'],
      attractionsEn: ['The Bund', 'Oriental Pearl Tower', 'Yu Garden']
    },
    {
      id: 'xian', // 改为字符串 ID
      name: '西安',
      nameEn: "Xi'an",
      description: '古丝绸之路的起点，历史文化名城',
      descriptionEn: 'Starting point of ancient Silk Road, famous historical city',
      image: '/images/xian.jpg',
      attractions: ['兵马俑', '大雁塔', '古城墙'],
      attractionsEn: ['Terracotta Army', 'Giant Wild Goose Pagoda', 'Ancient City Wall']
    },
    {
      id: 'chengdu', // 改为字符串 ID
      name: '成都',
      nameEn: 'Chengdu',
      description: '天府之国，熊猫故乡',
      descriptionEn: 'Land of abundance, hometown of pandas',
      image: '/images/chengdu.jpg',
      attractions: ['大熊猫基地', '宽窄巷子', '武侯祠'],
      attractionsEn: ['Panda Base', 'Kuanzhai Alley', 'Wuhou Shrine']
    },
    {
      id: 5,
      name: '杭州',
      nameEn: 'Hangzhou',
      description: '人间天堂，西湖美景',
      descriptionEn: 'Paradise on earth, beautiful West Lake',
      image: '/images/hangzhou.jpg',
      attractions: ['西湖', '灵隐寺', '千岛湖'],
      attractionsEn: ['West Lake', 'Lingyin Temple', 'Thousand Island Lake']
    },
    {
      id: 6,
      name: '桂林',
      nameEn: 'Guilin',
      description: '桂林山水甲天下',
      descriptionEn: 'Guilin\'s scenery is the best under heaven',
      image: '/images/guilin.jpg',
      attractions: ['漓江', '象鼻山', '阳朔'],
      attractionsEn: ['Li River', 'Elephant Trunk Hill', 'Yangshuo']
    }
  ];

  return (
    <div className="cities">
      <div className="container">
        <motion.div
          className="cities-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="cities-title">{translations.cities.title}</h1>
          <p className="cities-subtitle">
            {currentLanguage.code === 'zh' 
              ? '探索中国最美丽的城市，发现独特的文化和风景' 
              : 'Explore China\'s most beautiful cities and discover unique culture and scenery'
            }
          </p>
        </motion.div>

        <div className="cities-grid">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              className="city-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="city-image">
                <img src={city.image} alt={city.name} />
                <div className="city-overlay">
                  <Link to={`/cities/${city.id}`} className="explore-btn">
                    {currentLanguage.code === 'zh' ? '探索更多' : 'Explore More'}
                  </Link>
                </div>
              </div>
              <div className="city-content">
                <h3 className="city-name">
                  {currentLanguage.code === 'zh' ? city.name : city.nameEn}
                </h3>
                <p className="city-description">
                  {currentLanguage.code === 'zh' ? city.description : city.descriptionEn}
                </p>
                <div className="city-attractions">
                  <h4>{currentLanguage.code === 'zh' ? '主要景点：' : 'Main Attractions:'}</h4>
                  <ul>
                    {(currentLanguage.code === 'zh' ? city.attractions : city.attractionsEn).map((attraction, idx) => (
                      <li key={idx}>{attraction}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cities;

