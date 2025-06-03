// Copyright 2025 sunwudong
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// 城市信息接口
export interface City {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  highlights: string[];
  highlightsEn: string[];
  attractions: Attraction[];
  foods: Food[];
  transportation: Transportation;
  hotels: Hotel[];
}

// 景点接口
export interface Attraction {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  rating: number;
  price: string;
  openTime: string;
  location: string;
}

// 美食接口
export interface Food {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  price: string;
  restaurant: string;
}

// 交通信息接口
export interface Transportation {
  airport: string;
  airportEn: string;
  metro: string[];
  metroEn: string[];
  taxi: string;
  taxiEn: string;
  bus: string;
  busEn: string;
}

// 酒店接口
export interface Hotel {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  rating: number;
  price: string;
  location: string;
}

// 语言接口
export interface Language {
  code: 'zh' | 'en';
  name: string;
  flag: string;
}

// 签证政策接口
export interface VisaPolicy {
  title: string;
  titleEn: string;
  duration: string;
  durationEn: string;
  countries: string[];
  countriesEn: string[];
  requirements: string[];
  requirementsEn: string[];
  process: ProcessStep[];
}

// 流程步骤接口
export interface ProcessStep {
  step: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

// 旅行行程接口
export interface TravelItinerary {
  id: string;
  title: string;
  titleEn: string;
  duration: string;
  cities: string[];
  days: DayPlan[];
}

// 日程计划接口
export interface DayPlan {
  day: number;
  city: string;
  activities: Activity[];
}

// 活动接口
export interface Activity {
  time: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  location: string;
}

