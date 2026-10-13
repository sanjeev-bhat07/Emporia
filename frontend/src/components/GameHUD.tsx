import type { Player, Screen } from '../types/game';
import './GameHUD.css';

interface GameHUDProps {
  player: Player;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const GameHUD = ({ player, currentScreen, onNavigate }: GameHUDProps) => {
  const experiencePercent = (player.experience / player.experienceToNextLevel) * 100;
  const totalWealth = player.cash + player.portfolioValue;
  const profitLoss = player.portfolioValue - 50000;

  return (
    <div className="game-hud">
      {/* Top Left - Money */}
      <div className="hud-section hud-money">
        <div className="money-display">
          <span className="money-amount mono">{totalWealth.toLocaleString()}</span>
          <span className="money-label">Credits</span>
        </div>
      </div>

      {/* Top Right - Player Profile */}
      <div className="hud-section hud-profile">
        <div className="profile-card" onClick={() => onNavigate('profile')}>
          <div className="profile-info">
            <div className="profile-header">
              <span className="profile-name">{player.username}</span>
              <span className="level-badge">LV{player.level}</span>
            </div>
            <div className="xp-bar">
              <div className="xp-fill" style={{ width: `${experiencePercent}%` }}></div>
            </div>
          </div>
          <div className="profile-avatar">{player.avatar}</div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="hud-section hud-navigation">
        <nav className="nav-menu">
          <button
            className={`nav-btn ${currentScreen === 'city-hub' ? 'active' : ''}`}
            onClick={() => onNavigate('city-hub')}
          >
            <span className="nav-icon">🏙️</span>
            <span className="nav-label">City</span>
          </button>
          
          <button
            className={`nav-btn ${currentScreen === 'portfolio' ? 'active' : ''}`}
            onClick={() => onNavigate('portfolio')}
          >
            <span className="nav-icon">💼</span>
            <span className="nav-label">Portfolio</span>
          </button>
          
          <button
            className={`nav-btn ${currentScreen === 'commodity-market' ? 'active' : ''}`}
            onClick={() => onNavigate('commodity-market')}
          >
            <span className="nav-icon">📊</span>
            <span className="nav-label">Markets</span>
          </button>
          
          <button
            className={`nav-btn ${currentScreen === 'bots' ? 'active' : ''}`}
            onClick={() => onNavigate('bots')}
          >
            <span className="nav-icon">🤖</span>
            <span className="nav-label">Bots</span>
          </button>
          
          <button
            className={`nav-btn ${currentScreen === 'levels' ? 'active' : ''}`}
            onClick={() => onNavigate('levels')}
          >
            <span className="nav-icon">🎯</span>
            <span className="nav-label">Levels</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default GameHUD;
