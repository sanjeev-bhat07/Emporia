import type { Player } from '../types/game';
import { mockAchievements } from '../data/mockData';
import './PlayerProfile.css';

interface PlayerProfileProps {
  player: Player;
  onBack: () => void;
}

const PlayerProfile = ({ player, onBack }: PlayerProfileProps) => {
  const experiencePercent = (player.experience / player.experienceToNextLevel) * 100;

  return (
    <div className="player-profile">
      <div className="profile-header">
        <button className="back-btn cyber-button" onClick={onBack}>
          ← BACK
        </button>
        <h1 className="profile-title neon-text-cyan">PLAYER PROFILE</h1>
      </div>

      <div className="profile-content">
        <div className="profile-main cyber-panel">
          <div className="profile-avatar-large">{player.avatar}</div>
          <h2 className="profile-username neon-text-cyan">{player.username}</h2>
          
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-label">LEVEL</span>
              <span className="stat-value">{player.level}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">REPUTATION</span>
              <span className="stat-value">{player.reputation}/100</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">TOTAL WEALTH</span>
              <span className="stat-value">${(player.cash + player.portfolioValue).toLocaleString()}</span>
            </div>
          </div>
          
          <div className="experience-section">
            <div className="xp-info">
              <span>EXPERIENCE</span>
              <span className="mono">{player.experience} / {player.experienceToNextLevel} XP</span>
            </div>
            <div className="xp-bar-large">
              <div className="xp-fill-large" style={{ width: `${experiencePercent}%` }}></div>
            </div>
            <p className="xp-remaining">{player.experienceToNextLevel - player.experience} XP to next level</p>
          </div>
        </div>

        <div className="achievements-section cyber-panel">
          <h3>ACHIEVEMENTS</h3>
          <div className="achievements-grid">
            {mockAchievements.map((achievement) => (
              <div key={achievement.id} className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}>
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-info">
                  <h4>{achievement.name}</h4>
                  <p>{achievement.description}</p>
                  {achievement.unlocked && achievement.unlockedAt && (
                    <span className="unlock-date mono">
                      {new Date(achievement.unlockedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
