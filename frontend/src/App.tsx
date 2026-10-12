import { useState } from 'react';
import CityHub from './components/CityHub';
import CompanyDetail from './components/CompanyDetail';
import CommodityMarket from './components/CommodityMarket';
import Portfolio from './components/Portfolio';
import BotsDirectory from './components/BotsDirectory';
import LevelsScreen from './components/LevelsScreen';
import PlayerProfile from './components/PlayerProfile';
import GameHUD from './components/GameHUD';
import MascotGuide from './components/MascotGuide';
import type { Screen, Company, Commodity } from './types/game';
import { mockPlayer, mockCompanies, mockCommodities, mockPortfolio, mockMascot } from './data/mockData';
import './styles/App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('city-hub');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedCommodity, setSelectedCommodity] = useState<Commodity | null>(null);
  const [player, setPlayer] = useState(mockPlayer);
  const [portfolio, setPortfolio] = useState(mockPortfolio);
  const [mascot, setMascot] = useState(mockMascot);

  const handleCompanySelect = (company: Company) => {
    if (!company.available) {
      setMascot({
        ...mascot,
        currentDialogue: 'This location is locked. Complete more levels to unlock it!'
      });
      return;
    }
    setSelectedCompany(company);
    setCurrentScreen('company-detail');
  };

  const handleCommoditySelect = (commodity: Commodity) => {
    if (!commodity.available) {
      setMascot({
        ...mascot,
        currentDialogue: 'This commodity market is not yet accessible. Keep progressing!'
      });
      return;
    }
    setSelectedCommodity(commodity);
    setCurrentScreen('commodity-market');
  };

  const handleTrade = (type: 'buy' | 'sell', assetId: string, quantity: number, price: number) => {
    const totalValue = quantity * price;
    
    if (type === 'buy') {
      if (totalValue > player.cash) {
        setMascot({
          ...mascot,
          currentDialogue: 'Insufficient funds for this transaction.'
        });
        return;
      }
      
      setPlayer({
        ...player,
        cash: player.cash - totalValue
      });
      
      setMascot({
        ...mascot,
        currentDialogue: `Purchase successful! You bought ${quantity} units at ${price.toFixed(2)} each.`
      });
    } else {
      setPlayer({
        ...player,
        cash: player.cash + totalValue
      });
      
      setMascot({
        ...mascot,
        currentDialogue: `Sale successful! You sold ${quantity} units at ${price.toFixed(2)} each.`
      });
    }
  };

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    if (screen === 'city-hub') {
      setSelectedCompany(null);
      setSelectedCommodity(null);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'city-hub':
        return (
          <CityHub
            companies={mockCompanies}
            onCompanySelect={handleCompanySelect}
            onNavigate={navigateTo}
          />
        );
      case 'company-detail':
        return selectedCompany ? (
          <CompanyDetail
            company={selectedCompany}
            portfolio={portfolio}
            playerCash={player.cash}
            onTrade={handleTrade}
            onBack={() => navigateTo('city-hub')}
          />
        ) : null;
      case 'commodity-market':
        return (
          <CommodityMarket
            commodities={mockCommodities}
            portfolio={portfolio}
            playerCash={player.cash}
            onCommoditySelect={handleCommoditySelect}
            onTrade={handleTrade}
            onBack={() => navigateTo('city-hub')}
          />
        );
      case 'portfolio':
        return (
          <Portfolio
            portfolio={portfolio}
            player={player}
            onBack={() => navigateTo('city-hub')}
          />
        );
      case 'bots':
        return <BotsDirectory onBack={() => navigateTo('city-hub')} />;
      case 'levels':
        return <LevelsScreen onBack={() => navigateTo('city-hub')} />;
      case 'profile':
        return <PlayerProfile player={player} onBack={() => navigateTo('city-hub')} />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <GameHUD
        player={player}
        currentScreen={currentScreen}
        onNavigate={navigateTo}
      />
      <div className="game-screen">
        {renderScreen()}
      </div>
      <MascotGuide mascot={mascot} />
    </div>
  );
}

export default App;
