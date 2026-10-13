import { mockBots } from '../data/mockData';
import './BotsDirectory.css';

interface BotsDirectoryProps {
  onBack: () => void;
}

const BotsDirectory = ({ onBack }: BotsDirectoryProps) => {
  const getTrustColor = (score: number) => {
    if (score >= 75) return 'var(--cyber-toxic-green)';
    if (score >= 50) return 'var(--cyber-gold)';
    return 'var(--cyber-warning-red)';
  };

  return (
    <div className="bots-directory">
      <div className="bots-header">
        <button className="back-btn cyber-button" onClick={onBack}>
          ← BACK
        </button>
        <h1 className="bots-title neon-text-cyan">TRADING BOTS</h1>
      </div>

      <div className="bots-grid">
        {mockBots.map((bot) => (
          <div key={bot.id} className="bot-card cyber-panel" style={{ borderColor: bot.colorScheme }}>
            <div className="bot-avatar" style={{ borderColor: bot.colorScheme }}>
              <span style={{ fontSize: '3rem' }}>{bot.avatar}</span>
            </div>
            
            <div className="bot-info">
              <h3 className="bot-name" style={{ color: bot.colorScheme }}>{bot.name}</h3>
              <p className="bot-personality">{bot.personality}</p>
              
              <div className="bot-stats">
                <div className="bot-stat">
                  <span className="stat-label">TRADING STYLE</span>
                  <span className="stat-value">{bot.tradingStyle.toUpperCase()}</span>
                </div>
                <div className="bot-stat">
                  <span className="stat-label">TRUST SCORE</span>
                  <div className="trust-display">
                    <span className="trust-value" style={{ color: getTrustColor(bot.trustScore) }}>
                      {bot.trustScore}/100
                    </span>
                    <div className="trust-bar">
                      <div 
                        className="trust-fill" 
                        style={{ 
                          width: `${bot.trustScore}%`, 
                          background: getTrustColor(bot.trustScore) 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bot-description">
                <p>{bot.description}</p>
              </div>
              
              {bot.dialogue.length > 0 && (
                <div className="bot-dialogue">
                  <div className={`dialogue-bubble dialogue-${bot.dialogue[0].mood}`}>
                    <p>"{bot.dialogue[0].message}"</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotsDirectory;
