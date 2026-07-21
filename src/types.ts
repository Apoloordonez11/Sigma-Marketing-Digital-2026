/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Pillar {
  id: string;
  name: string;
  icon: string;
}

export interface ProblemSolutionItem {
  text: string;
  isProblem: boolean;
}

export interface EcosystemNode {
  id: string;
  label: string;
  icon: string;
  description: string;
  position: 'left' | 'right' | 'center' | 'base';
}

export interface FunnelStage {
  id: number;
  label: string;
  conversionRate: string;
  kpi: string;
  description: string;
  color: string;
}

export interface GrowthLever {
  title: string;
  description: string;
  badge: string;
  icon: string;
}

export interface SearchQuery {
  id: number;
  text: string;
  results: string[];
}

export interface TimelineStep {
  id: number;
  label: string;
  type: 'auto' | 'human' | 'feedback';
  description: string;
}

export interface DashboardMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  trend: string;
  icon: string;
}

export interface RoadmapStep {
  id: string;
  title: string;
  subtitle: string;
  list: string[];
  icon: string;
  status: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  badge: string;
  phrase: string;
  idealFor: string;
  features: { name: string; included: boolean }[];
  isFeatured: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  metric: string;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
