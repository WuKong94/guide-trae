import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Language } from '../types';

// 翻译内容接口
interface Translations {
  nav: {
    home: string;
    cities: string;
    visaPolicy: string;
    travelGuide: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    subtitle: string;
  };
  cities: {
    title: string;
    subtitle: string;
    viewDetails: string;
    viewAll: string;
  };
  common: {
    learnMore: string;
  };
  visaPolicy: {
    title: string;
    subtitle: string;
    duration: string;
    countries: string;
    requirements: string;
    process: string;
  };
  footer: {
    company: string;
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    copyright: string;
  };
}

// 语言上下文接口
interface LanguageContextType {
  currentLanguage: Language;
  translations: Translations;
  switchLanguage: (language: Language) => void;
  availableLanguages: Language[];
}

// 可用语言
const availableLanguages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

// 翻译内容
const translations: Record<string, Translations> = {
  en: {
    nav: {
      home: 'Home',
      cities: 'Cities',
      visaPolicy: 'Visa Policy',
      travelGuide: 'Travel Guide',
      contact: 'Contact'
    },
    hero: {
      title: 'Discover China in 144 Hours',
      subtitle: 'Experience the beauty and culture of China with our visa-free travel program',
      cta: 'Start Your Journey'
    },
    features: {
      subtitle: 'Discover what makes our service special'
    },
    cities: {
      title: 'Featured Cities',
      subtitle: 'Explore China\'s most beautiful destinations',
      viewDetails: 'View Details',
      viewAll: 'View All Cities'
    },
    common: {
      learnMore: 'Learn More'
    },
    visaPolicy: {
      title: '144-Hour Visa-Free Policy',
      subtitle: 'Travel to China without a visa for up to 144 hours',
      duration: 'Duration',
      countries: 'Eligible Countries',
      requirements: 'Requirements',
      process: 'Application Process'
    },
    footer: {
      company: 'China Travel Guide',
      description: 'Your trusted partner for exploring China',
      quickLinks: 'Quick Links',
      contact: 'Contact Info',
      followUs: 'Follow Us',
      copyright: '© 2024 China Travel Guide. All rights reserved.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      cities: '城市',
      visaPolicy: '签证政策',
      travelGuide: '旅游指南',
      contact: '联系我们'
    },
    hero: {
      title: '144小时发现中国',
      subtitle: '通过我们的免签旅行计划，体验中国的美丽和文化',
      cta: '开始您的旅程'
    },
    features: {
      subtitle: '发现我们服务的特色之处'
    },
    cities: {
      title: '精选城市',
      subtitle: '探索中国最美丽的目的地',
      viewDetails: '查看详情',
      viewAll: '查看所有城市'
    },
    common: {
      learnMore: '了解更多'
    },
    visaPolicy: {
      title: '144小时免签政策',
      subtitle: '无需签证即可在中国旅行最多144小时',
      duration: '停留时间',
      countries: '适用国家',
      requirements: '申请要求',
      process: '申请流程'
    },
    footer: {
      company: '中国旅游指南',
      description: '您探索中国的可信赖伙伴',
      quickLinks: '快速链接',
      contact: '联系信息',
      followUs: '关注我们',
      copyright: '© 2024 中国旅游指南. 保留所有权利.'
    }
  }
};

// 创建上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 语言提供者组件
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(availableLanguages[0]);

  const switchLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const value: LanguageContextType = {
    currentLanguage,
    translations: translations[currentLanguage.code],
    switchLanguage,
    availableLanguages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 使用语言上下文的钩子
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

