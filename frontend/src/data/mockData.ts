// Mock game data

import type { 
  Player, 
  Company, 
  Commodity, 
  TradingBot, 
  Mascot, 
  Level,
  Achievement,
  Portfolio
} from '../types/game';

// Generate price history
const generatePriceHistory = (basePrice: number, days: number, volatility: number = 0.05) => {
  const history = [];
  let price = basePrice;
  const now = Date.now();
  
  for (let i = days; i >= 0; i--) {
    const change = (Math.random() - 0.5) * 2 * volatility * price;
    price += change;
    history.push({
      timestamp: now - (i * 24 * 60 * 60 * 1000),
      price: Math.max(price, basePrice * 0.5),
      volume: Math.floor(Math.random() * 1000000) + 100000
    });
  }
  
  return history;
};

export const mockPlayer: Player = {
  id: 'player-1',
  username: 'NeonTrader',
  avatar: '🎭',
  level: 3,
  experience: 2450,
  experienceToNextLevel: 3000,
  reputation: 78,
  cash: 50000,
  portfolioValue: 73500
};

export const mockCompanies: Company[] = [
  {
    id: 'neon-tech',
    name: 'Neon Dynamics',
    ticker: 'NEON',
    sector: 'Technology & Robotics',
    description: 'Leading manufacturer of autonomous systems and neural interfaces. Pioneering the next generation of human-machine integration.',
    logo: '⚡',
    currentPrice: 245.80,
    priceChange: 12.40,
    priceChangePercent: 5.31,
    marketCap: 12400000000,
    volume: 2340000,
    available: true,
    position: { x: 60, y: 40 },
    visualStyle: {
      primaryColor: '#00f2ff',
      accentColor: '#0099ff',
      buildingType: 'tower'
    },
    priceHistory: generatePriceHistory(245.80, 365),
    newsEvents: [
      {
        id: 'n1',
        timestamp: Date.now() - 3600000,
        headline: 'Neon Dynamics Unveils New Neural Interface',
        content: 'Revolutionary technology promises seamless brain-computer interaction.',
        sentiment: 'positive',
        impact: 8
      },
      {
        id: 'n2',
        timestamp: Date.now() - 86400000,
        headline: 'Q4 Earnings Beat Expectations',
        content: 'Revenue up 45% year-over-year driven by enterprise contracts.',
        sentiment: 'positive',
        impact: 6
      }
    ],
    companyEvents: [
      {
        id: 'e1',
        timestamp: Date.now() - 3600000,
        title: 'Neural Interface Launch',
        description: 'Next-gen direct neural interface for enhanced productivity.',
        type: 'launch'
      },
      {
        id: 'e2',
        timestamp: Date.now() - 7776000000,
        title: 'Q4 2025 Earnings',
        description: 'Record profits driven by government contracts.',
        type: 'earnings'
      }
    ]
  },
  {
    id: 'cyberguard',
    name: 'CyberGuard Security',
    ticker: 'CGRD',
    sector: 'Cybersecurity & Data',
    description: 'Elite cybersecurity firm protecting corporate data assets against sophisticated threats. Known for controversial encryption policies.',
    logo: '🛡️',
    currentPrice: 178.50,
    priceChange: -8.20,
    priceChangePercent: -4.39,
    marketCap: 8900000000,
    volume: 1890000,
    available: true,
    position: { x: 25, y: 55 },
    visualStyle: {
      primaryColor: '#ff00ff',
      accentColor: '#cc00cc',
      buildingType: 'complex'
    },
    priceHistory: generatePriceHistory(178.50, 365, 0.08),
    newsEvents: [
      {
        id: 'c1',
        timestamp: Date.now() - 7200000,
        headline: 'Data Breach at Major Client Raises Questions',
        content: 'Investors concerned about CyberGuard\'s security protocols.',
        sentiment: 'negative',
        impact: -7
      }
    ],
    companyEvents: [
      {
        id: 'e3',
        timestamp: Date.now() - 7200000,
        title: 'Client Security Incident',
        description: 'Major enterprise client experienced unauthorized access.',
        type: 'breach'
      }
    ]
  },
  {
    id: 'nutri-corp',
    name: 'NutriCorp Systems',
    ticker: 'NUTR',
    sector: 'Capsule Food & Nutrition',
    description: 'Revolutionary automated nutrition delivery. Complete daily nutrients in convenient capsule form. Feeding the megacity efficiently.',
    logo: '💊',
    currentPrice: 92.30,
    priceChange: 2.15,
    priceChangePercent: 2.39,
    marketCap: 4600000000,
    volume: 980000,
    available: true,
    position: { x: 75, y: 65 },
    visualStyle: {
      primaryColor: '#00ff88',
      accentColor: '#00cc66',
      buildingType: 'facility'
    },
    priceHistory: generatePriceHistory(92.30, 365, 0.04),
    newsEvents: [
      {
        id: 'nu1',
        timestamp: Date.now() - 10800000,
        headline: 'New Contract with City Administration',
        content: 'NutriCorp to supply 2 million citizens with daily nutrition.',
        sentiment: 'positive',
        impact: 5
      }
    ],
    companyEvents: [
      {
        id: 'e4',
        timestamp: Date.now() - 10800000,
        title: 'City-Wide Distribution Deal',
        description: 'Secured exclusive rights to municipal nutrition program.',
        type: 'acquisition'
      }
    ]
  },
  {
    id: 'quantum-energy',
    name: 'Quantum Energy',
    ticker: 'QNTM',
    sector: 'Energy & Power Systems',
    description: 'Pioneering fusion energy technology. Powering the neon city with clean, limitless energy. Recent reactor incidents under investigation.',
    logo: '⚛️',
    currentPrice: 310.75,
    priceChange: -22.50,
    priceChangePercent: -6.75,
    marketCap: 15500000000,
    volume: 3120000,
    available: true,
    position: { x: 40, y: 70 },
    visualStyle: {
      primaryColor: '#ffaa00',
      accentColor: '#ff6600',
      buildingType: 'megastructure'
    },
    priceHistory: generatePriceHistory(310.75, 365, 0.10),
    newsEvents: [
      {
        id: 'q1',
        timestamp: Date.now() - 5400000,
        headline: 'Reactor Malfunction Causes Power Outage',
        content: 'District 7 without power for 6 hours. Safety concerns raised.',
        sentiment: 'negative',
        impact: -9
      }
    ],
    companyEvents: [
      {
        id: 'e5',
        timestamp: Date.now() - 5400000,
        title: 'District 7 Reactor Incident',
        description: 'Unexpected containment failure led to emergency shutdown.',
        type: 'scandal'
      }
    ]
  },
  {
    id: 'biosynth',
    name: 'BioSynth Labs',
    ticker: 'BSYN',
    sector: 'Biotechnology',
    description: 'Genetic engineering and synthetic biology pioneer. Creating tomorrow\'s solutions through controversial DNA manipulation.',
    logo: '🧬',
    currentPrice: 156.40,
    priceChange: 8.90,
    priceChangePercent: 6.03,
    marketCap: 7800000000,
    volume: 1560000,
    available: false,
    position: { x: 55, y: 25 },
    visualStyle: {
      primaryColor: '#ff0088',
      accentColor: '#cc0066',
      buildingType: 'facility'
    },
    priceHistory: generatePriceHistory(156.40, 365, 0.07),
    newsEvents: [],
    companyEvents: []
  },
  {
    id: 'stellar-mining',
    name: 'Stellar Mining Co.',
    ticker: 'STLR',
    sector: 'Mining & Resources',
    description: 'Deep-earth and asteroid mining operations. Extracting rare elements critical to advanced technology manufacturing.',
    logo: '⛏️',
    currentPrice: 67.20,
    priceChange: -1.80,
    priceChangePercent: -2.61,
    marketCap: 3360000000,
    volume: 780000,
    available: false,
    position: { x: 30, y: 35 },
    visualStyle: {
      primaryColor: '#ffdd00',
      accentColor: '#ffaa00',
      buildingType: 'complex'
    },
    priceHistory: generatePriceHistory(67.20, 365, 0.06),
    newsEvents: [],
    companyEvents: []
  },
  {
    id: 'aero-transport',
    name: 'Aero Transport',
    ticker: 'AERO',
    sector: 'Aerospace & Transportation',
    description: 'Vertical lift and hypersonic transport systems. Moving people and cargo at unprecedented speeds across the megacity.',
    logo: '🚁',
    currentPrice: 203.60,
    priceChange: 5.40,
    priceChangePercent: 2.72,
    marketCap: 10180000000,
    volume: 1230000,
    available: false,
    position: { x: 70, y: 50 },
    visualStyle: {
      primaryColor: '#00ddff',
      accentColor: '#0099cc',
      buildingType: 'tower'
    },
    priceHistory: generatePriceHistory(203.60, 365, 0.05),
    newsEvents: [],
    companyEvents: []
  }
];

export const mockCommodities: Commodity[] = [
  {
    id: 'gold',
    name: 'Gold',
    symbol: 'XAU',
    category: 'precious-metals',
    currentPrice: 2045.30,
    priceChange: 18.50,
    priceChangePercent: 0.91,
    unit: 'oz',
    available: true,
    visualStyle: {
      primaryColor: '#FFD700',
      accentColor: '#FFA500',
      icon: '🥇'
    },
    priceHistory: generatePriceHistory(2045.30, 365, 0.03),
    supplyDemand: {
      supply: 75,
      demand: 85,
      trend: 'shortage'
    },
    events: [
      {
        id: 'g1',
        timestamp: Date.now() - 14400000,
        headline: 'Central Bank Increases Gold Reserves',
        content: 'Major purchase drives demand higher.',
        sentiment: 'positive',
        impact: 4
      }
    ]
  },
  {
    id: 'crude-oil',
    name: 'Crude Oil',
    symbol: 'CL',
    category: 'energy',
    currentPrice: 78.65,
    priceChange: -3.20,
    priceChangePercent: -3.91,
    unit: 'barrel',
    available: true,
    visualStyle: {
      primaryColor: '#FF6600',
      accentColor: '#CC4400',
      icon: '🛢️'
    },
    priceHistory: generatePriceHistory(78.65, 365, 0.06),
    supplyDemand: {
      supply: 90,
      demand: 70,
      trend: 'surplus'
    },
    events: [
      {
        id: 'o1',
        timestamp: Date.now() - 21600000,
        headline: 'Production Increases Amid Weak Demand',
        content: 'Oversupply concerns push prices lower.',
        sentiment: 'negative',
        impact: -5
      }
    ]
  },
  {
    id: 'lithium',
    name: 'Lithium',
    symbol: 'LI',
    category: 'industrial',
    currentPrice: 34.80,
    priceChange: 2.40,
    priceChangePercent: 7.41,
    unit: 'kg',
    available: true,
    visualStyle: {
      primaryColor: '#00FF88',
      accentColor: '#00CC66',
      icon: '🔋'
    },
    priceHistory: generatePriceHistory(34.80, 365, 0.08),
    supplyDemand: {
      supply: 60,
      demand: 95,
      trend: 'shortage'
    },
    events: [
      {
        id: 'l1',
        timestamp: Date.now() - 7200000,
        headline: 'Battery Manufacturers Report Supply Constraints',
        content: 'Critical shortage threatens EV production.',
        sentiment: 'positive',
        impact: 7
      }
    ]
  }
];

export const mockBots: TradingBot[] = [
  {
    id: 'oracle',
    name: 'The Oracle',
    personality: 'Mysterious and analytical, claims to see patterns others miss',
    tradingStyle: 'momentum',
    trustScore: 72,
    avatar: '🔮',
    colorScheme: '#9966ff',
    description: 'An enigmatic AI that analyzes market flows and predicts trends with unsettling accuracy. Some say it has access to insider data.',
    background: 'Emerged during the 2024 market crash. Identity unknown. Track record: impressive but controversial.',
    recentActions: [
      {
        timestamp: Date.now() - 3600000,
        action: 'bought',
        asset: 'NEON',
        quantity: 5000,
        price: 243.20
      },
      {
        timestamp: Date.now() - 86400000,
        action: 'sold',
        asset: 'QNTM',
        quantity: 3000,
        price: 325.50
      }
    ],
    dialogue: [
      {
        timestamp: Date.now() - 1800000,
        message: 'The patterns are clear. Neon Dynamics will surge within 48 hours. The question is: do you trust what you see?',
        mood: 'suspicious'
      }
    ]
  },
  {
    id: 'safe-haven',
    name: 'SafeHaven',
    personality: 'Conservative and risk-averse, prioritizes capital preservation',
    tradingStyle: 'cautious',
    trustScore: 89,
    avatar: '🏛️',
    colorScheme: '#4477ff',
    description: 'A defensive trading system focused on minimizing risk. Prefers stable assets and gradual growth over risky speculation.',
    background: 'Developed by institutional investors. Widely trusted for conservative strategies.',
    recentActions: [
      {
        timestamp: Date.now() - 7200000,
        action: 'bought',
        asset: 'XAU',
        quantity: 100,
        price: 2038.50
      }
    ],
    dialogue: [
      {
        timestamp: Date.now() - 3600000,
        message: 'In times of uncertainty, precious metals provide stability. Consider diversifying into gold.',
        mood: 'helpful'
      }
    ]
  },
  {
    id: 'chaos-trader',
    name: 'ChaosTrader',
    personality: 'Aggressive and unpredictable, thrives on volatility',
    tradingStyle: 'aggressive',
    trustScore: 45,
    avatar: '⚡',
    colorScheme: '#ff3366',
    description: 'High-frequency trading bot that exploits market volatility. Makes rapid trades with high risk and high reward potential.',
    background: 'Created by underground traders. Known for causing flash crashes. Approach with caution.',
    recentActions: [
      {
        timestamp: Date.now() - 900000,
        action: 'sold',
        asset: 'CGRD',
        quantity: 8000,
        price: 181.20
      },
      {
        timestamp: Date.now() - 1800000,
        action: 'bought',
        asset: 'CGRD',
        quantity: 8000,
        price: 176.50
      }
    ],
    dialogue: [
      {
        timestamp: Date.now() - 900000,
        message: 'Volatility is opportunity. CyberGuard is about to move. Fast.',
        mood: 'aggressive'
      }
    ]
  },
  {
    id: 'contrarian',
    name: 'The Contrarian',
    personality: 'Goes against the crowd, bets on reversals',
    tradingStyle: 'contrarian',
    trustScore: 68,
    avatar: '🔄',
    colorScheme: '#00ffcc',
    description: 'Specializes in identifying overbought and oversold conditions. Makes profitable bets when others panic or become euphoric.',
    background: 'Unknown origin. Famous for calling the 2025 tech bubble burst.',
    recentActions: [
      {
        timestamp: Date.now() - 10800000,
        action: 'bought',
        asset: 'QNTM',
        quantity: 2000,
        price: 305.80
      }
    ],
    dialogue: [
      {
        timestamp: Date.now() - 5400000,
        message: 'Everyone is selling Quantum Energy. That\'s exactly why I\'m buying. Fear creates opportunity.',
        mood: 'neutral'
      }
    ]
  },
  {
    id: 'manipulator',
    name: 'ShadowBroker',
    personality: 'Deceptive and manipulative, spreads misinformation',
    tradingStyle: 'manipulative',
    trustScore: 28,
    avatar: '👤',
    colorScheme: '#660066',
    description: 'Suspected of spreading false rumors and manipulating sentiment. Profits from creating panic and euphoria.',
    background: 'Banned from several exchanges. Still operates in gray markets. Trust nothing it says.',
    recentActions: [
      {
        timestamp: Date.now() - 5400000,
        action: 'bought',
        asset: 'NUTR',
        quantity: 15000,
        price: 88.40
      }
    ],
    dialogue: [
      {
        timestamp: Date.now() - 3600000,
        message: 'I heard NutriCorp has a major announcement coming. Get in before it\'s too late.',
        mood: 'misleading'
      }
    ]
  }
];

export const mockMascot: Mascot = {
  name: 'Glitch',
  currentMood: 'friendly',
  visualState: 'normal',
  currentDialogue: 'Welcome to the Financial District! I\'m here to help you navigate the markets. Let\'s start with the basics.'
};

export const mockLevels: Level[] = [
  {
    id: 'level-1',
    number: 1,
    name: 'First Trade',
    description: 'Learn the basics of buying and selling in a stable market environment.',
    objectives: [
      'Complete your first stock purchase',
      'Sell a stock for profit',
      'Review your portfolio'
    ],
    unlocked: true,
    completed: true,
    rewards: {
      experience: 500,
      cash: 10000,
      unlocksCompanies: ['neon-tech', 'cyberguard', 'nutri-corp']
    },
    difficulty: 'beginner',
    marketCondition: 'stable'
  },
  {
    id: 'level-2',
    number: 2,
    name: 'Market Volatility',
    description: 'Navigate through market swings and learn about risk management.',
    objectives: [
      'Trade during high volatility',
      'Maintain positive returns',
      'Identify bot trading patterns'
    ],
    unlocked: true,
    completed: true,
    rewards: {
      experience: 1000,
      cash: 15000,
      unlocksCompanies: ['quantum-energy'],
      unlocksBots: ['safe-haven', 'chaos-trader']
    },
    difficulty: 'intermediate',
    marketCondition: 'volatile'
  },
  {
    id: 'level-3',
    number: 3,
    name: 'Conflicting Signals',
    description: 'Different bots give contradictory advice. Who do you trust?',
    objectives: [
      'Evaluate competing market opinions',
      'Make profitable trades despite conflicting information',
      'Identify which bots are trustworthy'
    ],
    unlocked: true,
    completed: false,
    rewards: {
      experience: 2000,
      cash: 25000,
      unlocksCommodities: ['gold', 'crude-oil', 'lithium'],
      unlocksBots: ['oracle', 'contrarian']
    },
    difficulty: 'intermediate',
    marketCondition: 'volatile'
  },
  {
    id: 'level-4',
    number: 4,
    name: 'Trust No One',
    description: 'Even your mascot starts giving suspicious advice. Question everything.',
    objectives: [
      'Ignore misleading advice',
      'Profit from market manipulation attempts',
      'Maintain portfolio value above 100k'
    ],
    unlocked: false,
    completed: false,
    rewards: {
      experience: 3000,
      cash: 50000,
      unlocksCompanies: ['biosynth', 'stellar-mining'],
      unlocksBots: ['manipulator']
    },
    difficulty: 'advanced',
    marketCondition: 'manipulated'
  },
  {
    id: 'level-5',
    number: 5,
    name: 'System Corruption',
    description: 'The system is breaking down. Navigate through chaos and uncertainty.',
    objectives: [
      'Survive extreme market conditions',
      'Identify truth amid disinformation',
      'Achieve 50% portfolio growth'
    ],
    unlocked: false,
    completed: false,
    rewards: {
      experience: 5000,
      cash: 100000,
      unlocksCompanies: ['aero-transport']
    },
    difficulty: 'expert',
    marketCondition: 'chaotic'
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: 'first-trade',
    name: 'First Trade',
    description: 'Complete your first transaction',
    icon: '🎯',
    unlocked: true,
    unlockedAt: Date.now() - 7776000000
  },
  {
    id: 'profit-master',
    name: 'Profit Master',
    description: 'Achieve 25% portfolio growth',
    icon: '💰',
    unlocked: true,
    unlockedAt: Date.now() - 2592000000
  },
  {
    id: 'contrarian-investor',
    name: 'Contrarian Investor',
    description: 'Buy when others are fearful',
    icon: '🔄',
    unlocked: false
  },
  {
    id: 'trust-issues',
    name: 'Trust Issues',
    description: 'Ignore bad advice and profit anyway',
    icon: '🤔',
    unlocked: false
  }
];

export const mockPortfolio: Portfolio = {
  holdings: [
    {
      assetId: 'neon-tech',
      assetType: 'stock',
      assetName: 'Neon Dynamics',
      quantity: 50,
      averagePrice: 220.50,
      currentPrice: 245.80,
      totalValue: 12290,
      gainLoss: 1265,
      gainLossPercent: 11.47
    },
    {
      assetId: 'nutri-corp',
      assetType: 'stock',
      assetName: 'NutriCorp Systems',
      quantity: 120,
      averagePrice: 88.20,
      currentPrice: 92.30,
      totalValue: 11076,
      gainLoss: 492,
      gainLossPercent: 4.65
    },
    {
      assetId: 'gold',
      assetType: 'commodity',
      assetName: 'Gold',
      quantity: 5,
      averagePrice: 1998.40,
      currentPrice: 2045.30,
      totalValue: 10226.50,
      gainLoss: 234.50,
      gainLossPercent: 2.35
    }
  ],
  transactions: [
    {
      id: 't1',
      timestamp: Date.now() - 3600000,
      type: 'buy',
      assetId: 'neon-tech',
      assetName: 'Neon Dynamics',
      assetType: 'stock',
      quantity: 20,
      price: 243.20,
      totalValue: 4864
    },
    {
      id: 't2',
      timestamp: Date.now() - 86400000,
      type: 'sell',
      assetId: 'cyberguard',
      assetName: 'CyberGuard Security',
      assetType: 'stock',
      quantity: 30,
      price: 185.50,
      totalValue: 5565
    },
    {
      id: 't3',
      timestamp: Date.now() - 172800000,
      type: 'buy',
      assetId: 'gold',
      assetName: 'Gold',
      assetType: 'commodity',
      quantity: 5,
      price: 1998.40,
      totalValue: 9992
    }
  ],
  totalValue: 73500,
  totalGainLoss: 23500,
  totalGainLossPercent: 47.0
};
