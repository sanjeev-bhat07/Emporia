# Emporia - Cyberpunk Trading Game UI

A visually immersive cyberpunk trading game where players learn about stocks, companies, commodities, and trading strategies through interactive gameplay in a futuristic neon city.

## 🎮 Features

### Main City Hub
- **Stunning 3D isometric cyberpunk city** with distinct architectural buildings
- Interactive company buildings with hover effects and information panels
- **Central Stock Exchange** - massive landmark building dominating the skyline
- Atmospheric effects: stars, fog, neon lights, animated tickers
- Different building types: Towers, Complexes, Facilities, Megastructures
- Each company has unique visual identity with custom colors and architecture

### Game Screens

1. **City Hub** - Main game map with all interactive locations
2. **Company Detail** - Deep dive into individual companies with:
   - Real-time price information
   - Interactive price charts with multiple time ranges
   - Company history and events timeline
   - Market news with sentiment indicators
   - Trading panel (buy/sell)
   - Portfolio position tracking

3. **Commodity Market** - Trade precious metals, energy, industrial goods
   - Visual commodity cards with icons and colors
   - Supply/demand indicators
   - Price charts and trends

4. **Portfolio** - Track your holdings and performance
   - Holdings overview with P/L
   - Recent transactions history
   - Asset breakdown

5. **Bots Directory** - Meet AI trading characters
   - 5 unique trading bots with distinct personalities
   - Trust scores and trading styles
   - Live dialogue showing their current market opinions
   - Characters range from helpful to manipulative

6. **Levels & Missions** - Structured progression system
   - Multiple difficulty levels
   - Objectives and rewards
   - Market conditions (stable, volatile, manipulated, chaotic)
   - Unlockable content

7. **Player Profile** - Your stats and achievements
   - Level and experience tracking
   - Reputation system
   - Achievement showcase

### Game HUD
- **Top Left**: Player profile with avatar, level, XP bar, reputation
- **Top Right**: Wallet showing cash, portfolio value, total wealth, P/L
- **Bottom Center**: Navigation menu with cyberpunk styling
- Clean, readable information overlay that doesn't obscure the city

### Mascot Guide
- Animated companion character named "Glitch"
- Contextual dialogue and guidance
- Multiple mood states (friendly, helpful, suspicious, misleading)
- **Corruption mechanics** - mascot becomes glitchy in later levels
- Visual state changes to reflect trustworthiness

## 🎨 Visual Design

### Cyberpunk Aesthetic
- Deep midnight blues, blacks, and violets for backgrounds
- Neon cyan, magenta, toxic green accents
- Stylized 2.5D illustrated buildings (not photorealistic)
- Scanline effects and subtle glitch animations
- Holographic panels and neon signage
- Clean, readable typography mixing Inter, Orbitron, and Fira Code

### Building Architecture
Each company has a unique architectural style:
- **Towers**: Tall corporate skyscrapers with neon strips and animated windows
- **Complexes**: Multi-block industrial facilities with radar systems
- **Facilities**: Dome-topped research centers with glowing cores
- **Megastructures**: Massive energy plants with cooling towers and reactors

### Color-Coded Elements
- Positive values: Toxic green (#00ff88)
- Negative values: Warning red (#ff3366)
- Interactive elements: Cyan (#00f2ff)
- Locked content: Grayscale with lock indicators

## 🕹️ Interactive Features

### Hover Effects
- Buildings highlight and glow when hovered
- Information panels slide in smoothly
- Animated neon borders and shadows

### Click Interactions
- Buildings open dedicated detail screens
- Trading panels with live buy/sell functionality
- Navigation between all game screens
- Expandable character dialogues

### Animations
- Floating buildings with subtle bob animation
- Pulsing neon lights and indicators
- Ticker text scrolling across the stock exchange
- Radar sweeps and holographic effects
- Window flicker simulations
- Smooth screen transitions

## 🏢 Mock Companies

7 fictional cyberpunk corporations:
1. **Neon Dynamics** (NEON) - Technology & Robotics
2. **CyberGuard Security** (CGRD) - Cybersecurity & Data
3. **NutriCorp Systems** (NUTR) - Capsule Food & Nutrition
4. **Quantum Energy** (QNTM) - Energy & Power Systems
5. **BioSynth Labs** (BSYN) - Biotechnology (Locked)
6. **Stellar Mining Co.** (STLR) - Mining & Resources (Locked)
7. **Aero Transport** (AERO) - Aerospace & Transportation (Locked)

## 📊 Trading Bots

5 AI characters with unique personalities:
1. **The Oracle** - Mysterious momentum trader (Trust: 72%)
2. **SafeHaven** - Conservative defensive trader (Trust: 89%)
3. **ChaosTrader** - Aggressive volatility exploiter (Trust: 45%)
4. **The Contrarian** - Reversal specialist (Trust: 68%)
5. **ShadowBroker** - Manipulative rumor spreader (Trust: 28%)

## 🚀 Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **No external UI libraries** - Pure custom components

## 📦 Project Structure

```
frontend/
├── src/
│   ├── components/         # All React components
│   │   ├── CityHub.tsx    # Main game screen
│   │   ├── CompanyDetail.tsx
│   │   ├── CommodityMarket.tsx
│   │   ├── Portfolio.tsx
│   │   ├── BotsDirectory.tsx
│   │   ├── LevelsScreen.tsx
│   │   ├── PlayerProfile.tsx
│   │   ├── GameHUD.tsx
│   │   ├── MascotGuide.tsx
│   │   ├── PriceChart.tsx
│   │   └── *.css          # Component styles
│   ├── data/
│   │   └── mockData.ts    # All game data
│   ├── types/
│   │   └── game.ts        # TypeScript definitions
│   ├── styles/
│   │   └── App.css        # Global styles
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build

```bash
npm run build
```

## 🎮 How to Play

1. **Start at the City Hub** - See all available companies
2. **Click on buildings** to view company details
3. **Trade stocks** using the buy/sell panels
4. **Check your portfolio** to track holdings and P/L
5. **Meet the bots** and read their market opinions
6. **Complete levels** to unlock new companies and features
7. **Watch the mascot** - it becomes less trustworthy as you progress!

## 🎨 Design Philosophy

- **Game-first, not finance-app**: Looks like an indie cyberpunk game
- **Visual storytelling**: Architecture tells you about each company
- **Progressive complexity**: Simple early levels, chaotic later stages
- **Question everything**: Teaches critical thinking about market advice
- **Cohesive aesthetic**: Every element follows the cyberpunk theme
- **No generic AI art**: Carefully crafted illustrated style

## 🔮 Future Enhancements

- More companies and commodities
- Additional bot characters
- Advanced chart types (candlestick, volume)
- Mini-games for learning concepts
- Sound effects and background music
- Mobile responsive optimizations
- Multiplayer leaderboards
- Achievement badges
- Story mode with narrative progression

## 📝 Notes

- This is a **UI prototype** with mock data
- No real trading or financial APIs
- No backend - all data is frontend state
- Educational tool for learning trading concepts
- Focuses on visual experience and interaction design

## 🎓 Educational Goals

Players learn about:
- Stock markets and price movements
- Reading charts and trends
- Portfolio management and diversification
- Risk assessment
- Market manipulation
- Information reliability
- Trading psychology
- Commodity markets
- Supply and demand dynamics

## 🌟 Credits

Built with ❤️ as an immersive cyberpunk trading education game.

Art direction inspired by: Blade Runner, Cyberpunk 2077, Akira, and illustrated isometric city designs.

---

**Welcome to Emporia - Where neon meets numbers. 🌃⚡💰**
