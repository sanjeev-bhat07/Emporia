import { mockLevels } from '../data/mockData';
import './LevelsScreen.css';

interface LevelsScreenProps {
  onBack: () => void;
}

const LevelsScreen = ({ onBack }: LevelsScreenProps) => {
  return (
    <div className="levels-screen">
      <div className="levels-header">
        <button className="back-btn cyber-button" onClick={onBack}>
          ← BACK
        </button>
        <h1 className="levels-title neon-text-cyan">MISSIONS & LEVELS</h1>
      </div>

      <div className="levels-list">
        {mockLevels.map((level) => (
          <div 
            key={level.id} 
            className={`level-card cyber-panel ${!level.unlocked ? 'locked' : ''} ${level.completed ? 'completed' : ''}`}
          >
            <div className="level-number">
              {level.completed ? '✓' : level.number}
            </div>
            
            <div className="level-info">
              <div className="level-header">
                <h3 className="level-name">{level.name}</h3>
                <span className={`difficulty-badge difficulty-${level.difficulty}`}>
                  {level.difficulty.toUpperCase()}
                </span>
              </div>
              
              <p className="level-description">{level.description}</p>
              
              {level.unlocked && (
                <>
                  <div className="level-objectives">
                    <h4>OBJECTIVES:</h4>
                    <ul>
                      {level.objectives.map((obj, index) => (
                        <li key={index}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="level-rewards">
                    <h4>REWARDS:</h4>
                    <div className="rewards-list">
                      <span className="reward">💰 ${level.rewards.cash.toLocaleString()}</span>
                      <span className="reward">⭐ {level.rewards.experience} XP</span>
                      {level.rewards.unlocksCompanies && level.rewards.unlocksCompanies.length > 0 && (
                        <span className="reward">🏢 {level.rewards.unlocksCompanies.length} Companies</span>
                      )}
                      {level.rewards.unlocksCommodities && level.rewards.unlocksCommodities.length > 0 && (
                        <span className="reward">📊 {level.rewards.unlocksCommodities.length} Commodities</span>
                      )}
                      {level.rewards.unlocksBots && level.rewards.unlocksBots.length > 0 && (
                        <span className="reward">🤖 {level.rewards.unlocksBots.length} Bots</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="level-condition">
                    <span className={`condition-badge condition-${level.marketCondition}`}>
                      MARKET: {level.marketCondition.toUpperCase()}
                    </span>
                  </div>
                </>
              )}
              
              {!level.unlocked && (
                <div className="level-locked">
                  <span className="lock-icon">🔒</span>
                  <p>Complete previous levels to unlock</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelsScreen;
