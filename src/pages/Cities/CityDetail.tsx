import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaUtensils, FaHotel } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './CityDetail.scss';

interface CityData {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  detailedDescription: string;
  detailedDescriptionEn: string;
  images: string[];
  attractions: Array<{
    name: string;
    nameEn: string;
    description: string;
    descriptionEn: string;
    image: string;
    duration: string;
    durationEn: string;
  }>;
  cuisine: Array<{
    name: string;
    nameEn: string;
    description: string;
    descriptionEn: string;
    image: string;
  }>;
  hotels: Array<{
    name: string;
    nameEn: string;
    rating: number;
    price: string;
    priceEn: string;
    image: string;
  }>;
  tips: string[];
  tipsEn: string[];
}

const CityDetail: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const { currentLanguage } = useLanguage();

  // 城市详细数据
  const citiesData: Record<string, CityData> = {
    beijing: {
      id: 'beijing',
      name: '北京',
      nameEn: 'Beijing',
      description: '中国的首都，拥有丰富的历史遗产',
      descriptionEn: 'Capital of China with rich historical and cultural heritage',
      detailedDescription: '北京，中华人民共和国首都，是一座有着三千多年历史的古都。这里既有古老的紫禁城、天坛、颐和园等皇家建筑群，也有现代化的国家体育场、央视大楼等地标建筑。北京是中国的政治、文化、教育中心，也是世界著名的历史文化名城。',
      detailedDescriptionEn: 'Beijing, the capital of the People\'s Republic of China, is an ancient capital with over 3,000 years of history. It features both ancient imperial architecture like the Forbidden City, Temple of Heaven, and Summer Palace, as well as modern landmarks like the National Stadium and CCTV Tower.',
      images: [
        'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
      ],
      attractions: [
        {
          name: '故宫博物院',
          nameEn: 'Forbidden City',
          description: '明清两代的皇家宫殿，世界上保存最完整的木质结构古建筑群',
          descriptionEn: 'Imperial palace of Ming and Qing dynasties, the world\'s largest collection of preserved ancient wooden structures',
          image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '3-4小时',
          durationEn: '3-4 hours'
        },
        {
          name: '万里长城',
          nameEn: 'Great Wall of China',
          description: '世界文化遗产，中国古代军事防御工程的杰作',
          descriptionEn: 'UNESCO World Heritage Site, masterpiece of ancient Chinese military defense',
          image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '半天',
          durationEn: 'Half day'
        },
        {
          name: '天安门广场',
          nameEn: 'Tiananmen Square',
          description: '世界上最大的城市广场之一，见证了中国现代史的重要时刻',
          descriptionEn: 'One of the world\'s largest city squares, witness to important moments in modern Chinese history',
          image: 'https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '1-2小时',
          durationEn: '1-2 hours'
        }
      ],
      cuisine: [
        {
          name: '北京烤鸭',
          nameEn: 'Peking Duck',
          description: '北京最著名的传统菜肴，皮脆肉嫩，配以薄饼、葱丝和甜面酱',
          descriptionEn: 'Beijing\'s most famous traditional dish, crispy skin and tender meat served with pancakes, scallions and sweet bean sauce',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: '炸酱面',
          nameEn: 'Zhajiangmian',
          description: '北京传统面食，配以炸酱和各种蔬菜丝',
          descriptionEn: 'Traditional Beijing noodles with fried bean sauce and julienned vegetables',
          image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ],
      hotels: [
        {
          name: '北京饭店',
          nameEn: 'Beijing Hotel',
          rating: 5,
          price: '¥800-1500/晚',
          priceEn: '$120-220/night',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: '王府井大饭店',
          nameEn: 'Wangfujing Grand Hotel',
          rating: 4,
          price: '¥500-800/晚',
          priceEn: '$75-120/night',
          image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ],
      tips: [
        '最佳旅游时间：春季（4-5月）和秋季（9-10月）',
        '建议提前预订故宫门票，每日限流',
        '地铁是最便捷的交通方式',
        '尝试当地小吃，如豆汁、炒肝等'
      ],
      tipsEn: [
        'Best time to visit: Spring (Apr-May) and Autumn (Sep-Oct)',
        'Book Forbidden City tickets in advance, daily visitor limit applies',
        'Subway is the most convenient transportation',
        'Try local snacks like douzhir and chaogan'
      ]
    },
    shanghai: {
      id: 'shanghai',
      name: '上海',
      nameEn: 'Shanghai',
      description: '国际化大都市，现代与传统完美融合',
      descriptionEn: 'International metropolis with perfect blend of modern and traditional',
      detailedDescription: '上海，中国最大的经济中心，被判为"东方巴黎"。黄浦江两岸，一边是充满历史韵味的国际建筑群，一边是象征现代化陆家嘴金融区。这座城市完美诠释了传统与现代的融合。',
      detailedDescriptionEn: 'Shanghai, China\'s largest economic center, known as the "Paris of the East". Along the Huangpu River, one side features the historic Bund with its international architecture, while the other showcases the modern Lujiazui financial district.',
      images: [
        'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1545893835-abaa50cbe628?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
      ],
      attractions: [
        {
          name: '外滩',
          nameEn: 'The Bund',
          description: '上海的标志性景观，汇集了各种风格的历史建筑',
          descriptionEn: 'Shanghai\'s iconic waterfront promenade featuring historic buildings of various architectural styles',
          image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '2-3小时',
          durationEn: '2-3 hours'
        },
        {
          name: '东方明珠塔',
          nameEn: 'Oriental Pearl Tower',
          description: '上海的地标建筑，可俯瞰整个城市美景',
          descriptionEn: 'Shanghai\'s landmark tower offering panoramic city views',
          image: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '1-2小时',
          durationEn: '1-2 hours'
        }
      ],
      cuisine: [
        {
          name: '小笼包',
          nameEn: 'Xiaolongbao',
          description: '上海特色点心，皮薄馅多，汤汁鲜美',
          descriptionEn: 'Shanghai specialty dumpling with thin skin, rich filling and delicious soup',
          image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ],
      hotels: [
        {
          name: '和平饭店',
          nameEn: 'Peace Hotel',
          rating: 5,
          price: '¥1000-2000/晚',
          priceEn: '$150-300/night',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ],
      tips: [
        '外滩夜景最美，建议晚上前往',
        '地铁网络发达，出行便利',
        '品尝正宗上海菜和小笼包'
      ],
      tipsEn: [
        'The Bund is most beautiful at night',
        'Extensive subway network for convenient travel',
        'Try authentic Shanghai cuisine and xiaolongbao'
      ]
    }
    // 可以继续添加其他城市的详细数据
  };

  const cityData = cityId ? citiesData[cityId] : null;

  if (!cityData) {
    return (
      <div className="city-detail">
        <div className="container">
          <div className="not-found">
            <h1>{currentLanguage.code === 'zh' ? '城市未找到' : 'City Not Found'}</h1>
            <Link to="/cities" className="btn btn--primary">
              {currentLanguage.code === 'zh' ? '返回城市列表' : 'Back to Cities'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="city-detail">
      {/* Hero Section */}
      <section className="city-hero">
        <div className="city-hero__background">
          <img src={cityData.images[0]} alt={cityData.name} />
          <div className="city-hero__overlay"></div>
        </div>
        <div className="container">
          <div className="city-hero__content">
            <Link to="/cities" className="back-link">
              <FaArrowLeft />
              {currentLanguage.code === 'zh' ? '返回城市列表' : 'Back to Cities'}
            </Link>
            <motion.h1 
              className="city-hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {currentLanguage.code === 'zh' ? cityData.name : cityData.nameEn}
            </motion.h1>
            <motion.p 
              className="city-hero__description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {currentLanguage.code === 'zh' ? cityData.detailedDescription : cityData.detailedDescriptionEn}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="city-attractions">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>
              <FaMapMarkerAlt />
              {currentLanguage.code === 'zh' ? '主要景点' : 'Main Attractions'}
            </h2>
          </motion.div>
          <div className="attractions-grid">
            {cityData.attractions.map((attraction, index) => (
              <motion.div 
                key={index}
                className="attraction-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="attraction-card__image">
                  <img src={attraction.image} alt={attraction.name} />
                </div>
                <div className="attraction-card__content">
                  <h3>{currentLanguage.code === 'zh' ? attraction.name : attraction.nameEn}</h3>
                  <p>{currentLanguage.code === 'zh' ? attraction.description : attraction.descriptionEn}</p>
                  <div className="attraction-card__duration">
                    <FaClock />
                    {currentLanguage.code === 'zh' ? attraction.duration : attraction.durationEn}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine Section */}
      <section className="city-cuisine">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>
              <FaUtensils />
              {currentLanguage.code === 'zh' ? '特色美食' : 'Local Cuisine'}
            </h2>
          </motion.div>
          <div className="cuisine-grid">
            {cityData.cuisine.map((dish, index) => (
              <motion.div 
                key={index}
                className="cuisine-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="cuisine-card__image">
                  <img src={dish.image} alt={dish.name} />
                </div>
                <div className="cuisine-card__content">
                  <h3>{currentLanguage.code === 'zh' ? dish.name : dish.nameEn}</h3>
                  <p>{currentLanguage.code === 'zh' ? dish.description : dish.descriptionEn}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="city-hotels">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>
              <FaHotel />
              {currentLanguage.code === 'zh' ? '推荐酒店' : 'Recommended Hotels'}
            </h2>
          </motion.div>
          <div className="hotels-grid">
            {cityData.hotels.map((hotel, index) => (
              <motion.div 
                key={index}
                className="hotel-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="hotel-card__image">
                  <img src={hotel.image} alt={hotel.name} />
                </div>
                <div className="hotel-card__content">
                  <h3>{currentLanguage.code === 'zh' ? hotel.name : hotel.nameEn}</h3>
                  <div className="hotel-card__rating">
                    {Array.from({ length: hotel.rating }, (_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <div className="hotel-card__price">
                    {currentLanguage.code === 'zh' ? hotel.price : hotel.priceEn}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="city-tips">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>{currentLanguage.code === 'zh' ? '旅行贴士' : 'Travel Tips'}</h2>
          </motion.div>
          <motion.div 
            className="tips-list"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {(currentLanguage.code === 'zh' ? cityData.tips : cityData.tipsEn).map((tip, index) => (
              <div key={index} className="tip-item">
                <span className="tip-number">{index + 1}</span>
                <span className="tip-text">{tip}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CityDetail;

