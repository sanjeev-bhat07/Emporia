// Core game type definitions

export interface Player {
  id: string;
  username: string;
  avatar: string;
  level: number;
  experience: number;
  experienceToNextLevel: number;
  reputation: number;
  cash: number;
  portfolioValue: number;
}

export interface Company {
  id: string;
  name: string;
  ticker: string;
  sector: string;
  description: string;
  logo: string;
  currentPrice: number;
  priceChange: number;
  priceChangePercent: number;
  marketCap: number;
  volume: number;
  available: boolean;
  position: { x: number; y: number };
  visualStyle: {
    primaryColor: string;
    accentColor: string;
    buildingType: 'tower' | 'complex' | 'facility' | 'megastructure';
  };
  priceHistory: PricePoint[];
  newsEvents: NewsEvent[];
  companyEvents: CompanyEvent[];
}

export interface PricePoint {
  timestamp: number;
  price: number;
  volume?: number;
}

export interface NewsEvent {
  id: string;
  timestamp: number;
  headline: string;
  content: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  impact: number;
}

export interface CompanyEvent {
  id: string;
  timestamp: number;
  title: string;
  description: string;
  type: 'launch' | 'earnings' | 'scandal' | 'acquisition' | 'breach' | 'shortage';
}

export interface Commodity {
  id: string;
  name: string;
  symbol: string;
  category: 'precious-metals' | 'energy' | 'industrial' | 'agriculture';
  currentPrice: number;
  priceChange: number;
  priceChangePercent: number;
  unit: string;
  available: boolean;
  visualStyle: {
    primaryColor: string;
    accentColor: string;
    icon: string;
  };
  priceHistory: PricePoint[];
  supplyDemand: {
    supply: number;
    demand: number;
    trend: 'shortage' | 'surplus' | 'balanced';
  };
  events: NewsEvent[];
}

export interface TradingBot {
  id: string;
  name: string;
  personality: string;
  tradingStyle: 'cautious' | 'aggressive' | 'momentum' | 'contrarian' | 'manipulative';
  trustScore: number;
  avatar: string;
  colorScheme: string;
  description: string;
  background: string;
  recentActions: BotAction[];
  dialogue: DialogueEntry[];
}

export interface BotAction {
  timestamp: number;
  action: 'bought' | 'sold' | 'held';
  asset: string;
  quantity: number;
  price: number;
}

export interface DialogueEntry {
  timestamp: number;
  message: string;
  mood: 'helpful' | 'suspicious' | 'aggressive' | 'misleading' | 'neutral';
}

export interface Mascot {
  name: string;
  currentMood: 'friendly' | 'helpful' | 'glitchy' | 'suspicious' | 'misleading';
  visualState: 'normal' | 'corrupted';
  currentDialogue?: string;
}

export interface Portfolio {
  holdings: Holding[];
  transactions: Transaction[];
  totalValue: number;
  totalGainLoss: number;
  totalGainLossPercent: number;
}

export interface Holding {
  assetId: string;
  assetType: 'stock' | 'commodity';
  assetName: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  totalValue: number;
  gainLoss: number;
  gainLossPercent: number;
}

export interface Transaction {
  id: string;
  timestamp: number;
  type: 'buy' | 'sell';
  assetId: string;
  assetName: string;
  assetType: 'stock' | 'commodity';
  quantity: number;
  price: number;
  totalValue: number;
}

export interface Level {
  id: string;
  number: number;
  name: string;
  description: string;
  objectives: string[];
  unlocked: boolean;
  completed: boolean;
  rewards: {
    experience: number;
    cash: number;
    unlocksCompanies?: string[];
    unlocksCommodities?: string[];
    unlocksBots?: string[];
  };
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  marketCondition: 'stable' | 'volatile' | 'manipulated' | 'chaotic';
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: number;
}

export type Screen = 
  | 'city-hub'
  | 'company-detail'
  | 'commodity-market'
  | 'portfolio'
  | 'bots'
  | 'levels'
  | 'profile';
