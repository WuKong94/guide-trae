import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FaMapMarkedAlt, FaUtensils, FaHotel, FaCamera, FaShoppingBag, FaSubway } from 'react-icons/fa';
import './TravelGuide.scss';

const TravelGuide: React.FC = () => {
  const { translations, currentLanguage } = useLanguage();

  const guideCategories = [
    {
      icon: <FaMapMarkedAlt />,
      title: currentLanguage.code === 'zh' ? '景点推荐' : 'Attractions',
      description: currentLanguage.code === 'zh' ? '精选热门景点和隐藏宝地' : 'Curated popular attractions and hidden gems',
      items: [
        { 
          name: currentLanguage.code === 'zh' ? '故宫博物院' : 'Forbidden City', 
          location: currentLanguage.code === 'zh' ? '北京' : 'Beijing' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '西湖' : 'West Lake', 
          location: currentLanguage.code === 'zh' ? '杭州' : 'Hangzhou' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '兵马俑' : 'Terracotta Army', 
          location: currentLanguage.code === 'zh' ? '西安' : "Xi'an" 
        },
        { 
          name: currentLanguage.code === 'zh' ? '外滩' : 'The Bund', 
          location: currentLanguage.code === 'zh' ? '上海' : 'Shanghai' 
        }
      ]
    },
    {
      icon: <FaUtensils />,
      title: currentLanguage.code === 'zh' ? '美食指南' : 'Food Guide',
      description: currentLanguage.code === 'zh' ? '品尝地道中华美食' : 'Taste authentic Chinese cuisine',
      items: [
        { 
          name: currentLanguage.code === 'zh' ? '北京烤鸭' : 'Peking Duck', 
          location: currentLanguage.code === 'zh' ? '北京' : 'Beijing' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '小笼包' : 'Xiaolongbao', 
          location: currentLanguage.code === 'zh' ? '上海' : 'Shanghai' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '火锅' : 'Hot Pot', 
          location: currentLanguage.code === 'zh' ? '重庆' : 'Chongqing' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '肉夹馍' : 'Roujiamo', 
          location: currentLanguage.code === 'zh' ? '西安' : "Xi'an" 
        }
      ]
    },
    {
      icon: <FaHotel />,
      title: currentLanguage.code === 'zh' ? '住宿推荐' : 'Accommodation',
      description: currentLanguage.code === 'zh' ? '舒适便捷的住宿选择' : 'Comfortable and convenient accommodation',
      items: [
        { 
          name: currentLanguage.code === 'zh' ? '豪华酒店' : 'Luxury Hotels', 
          location: currentLanguage.code === 'zh' ? '市中心' : 'City Center' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '精品民宿' : 'Boutique B&B', 
          location: currentLanguage.code === 'zh' ? '古城区' : 'Old Town' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '青年旅社' : 'Youth Hostels', 
          location: currentLanguage.code === 'zh' ? '背包客区' : 'Backpacker Area' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '商务酒店' : 'Business Hotels', 
          location: currentLanguage.code === 'zh' ? '商业区' : 'Business District' 
        }
      ]
    },
    {
      icon: <FaCamera />,
      title: currentLanguage.code === 'zh' ? '摄影指南' : 'Photography Guide',
      description: currentLanguage.code === 'zh' ? '捕捉最美的中国瞬间' : 'Capture the most beautiful moments in China',
      items: [
        { 
          name: currentLanguage.code === 'zh' ? '日出日落' : 'Sunrise & Sunset', 
          location: currentLanguage.code === 'zh' ? '黄山' : 'Huangshan' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '古建筑' : 'Ancient Architecture', 
          location: currentLanguage.code === 'zh' ? '平遥' : 'Pingyao' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '自然风光' : 'Natural Scenery', 
          location: currentLanguage.code === 'zh' ? '张家界' : 'Zhangjiajie' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '城市夜景' : 'City Night View', 
          location: currentLanguage.code === 'zh' ? '香港' : 'Hong Kong' 
        }
      ]
    },
    {
      icon: <FaShoppingBag />,
      title: currentLanguage.code === 'zh' ? '购物指南' : 'Shopping Guide',
      description: currentLanguage.code === 'zh' ? '发现独特的中国商品' : 'Discover unique Chinese products',
      items: [
        { 
          name: currentLanguage.code === 'zh' ? '丝绸制品' : 'Silk Products', 
          location: currentLanguage.code === 'zh' ? '苏州' : 'Suzhou' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '茶叶' : 'Tea', 
          location: currentLanguage.code === 'zh' ? '杭州' : 'Hangzhou' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '瓷器' : 'Porcelain', 
          location: currentLanguage.code === 'zh' ? '景德镇' : 'Jingdezhen' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '珠宝首饰' : 'Jewelry', 
          location: currentLanguage.code === 'zh' ? '深圳' : 'Shenzhen' 
        }
      ]
    },
    {
      icon: <FaSubway />,
      title: currentLanguage.code === 'zh' ? '交通指南' : 'Transportation Guide',
      description: currentLanguage.code === 'zh' ? '便捷出行攻略' : 'Convenient travel strategies',
      items: [
        { 
          name: currentLanguage.code === 'zh' ? '高铁' : 'High-speed Rail', 
          location: currentLanguage.code === 'zh' ? '全国' : 'Nationwide' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '地铁' : 'Subway', 
          location: currentLanguage.code === 'zh' ? '一线城市' : 'Tier-1 Cities' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '出租车' : 'Taxi', 
          location: currentLanguage.code === 'zh' ? '城市内' : 'Within Cities' 
        },
        { 
          name: currentLanguage.code === 'zh' ? '共享单车' : 'Bike Sharing', 
          location: currentLanguage.code === 'zh' ? '主要城市' : 'Major Cities' 
        }
      ]
    }
  ];

  return (
    <div className="travel-guide">
      <div className="container">
        <motion.div
          className="travel-guide__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="travel-guide__title">{translations.nav.travelGuide}</h1>
          <p className="travel-guide__subtitle">
            {currentLanguage.code === 'zh' 
              ? '全面的中国旅行指南，让您的旅程更加精彩' 
              : 'Comprehensive China travel guide to make your journey more exciting'}
          </p>
        </motion.div>

        <div className="travel-guide__categories">
          {guideCategories.map((category, index) => (
            <motion.div
              key={index}
              className="travel-guide__category"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="travel-guide__category-header">
                <div className="travel-guide__category-icon">{category.icon}</div>
                <div className="travel-guide__category-info">
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
              </div>
              <div className="travel-guide__category-items">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="travel-guide__item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                  >
                    <h3>{item.name}</h3>
                    <p>{item.location}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;

