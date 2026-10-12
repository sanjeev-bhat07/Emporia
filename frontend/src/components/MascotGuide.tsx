import { useState } from 'react';
import type { Mascot } from '../types/game';
import './MascotGuide.css';

interface MascotGuideProps {
  mascot: Mascot;
}

const MascotGuide = ({ mascot }: MascotGuideProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(!!mascot.currentDialogue);

  if (!isVisible || !mascot.currentDialogue) return null;

  const isCorrupted = mascot.visualState === 'corrupted';
  const isSuspicious = mascot.currentMood === 'suspicious' || mascot.currentMood === 'misleading';

  return (
    <div className={`mascot-guide ${isMinimized ? 'minimized' : ''}`}>
      {!isMinimized && (
        <div className="dialogue-container">
          <div className="dialogue-box">
            <div className="dialogue-header">
              <span className="mascot-name">{mascot.name}</span>
              <div className="dialogue-controls">
                <button
                  className="control-btn"
                  onClick={() => setIsMinimized(true)}
                  aria-label="Minimize"
                >
                  _
                </button>
                <button
                  className="control-btn"
                  onClick={() => setIsVisible(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className={`dialogue-text ${isSuspicious ? 'suspicious' : ''}`}>
              {mascot.currentDialogue}
            </div>

            {isSuspicious && (
              <div className="warning-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Advice may be unreliable</span>
              </div>
            )}
          </div>
          
          <div className={`mascot-character ${isCorrupted ? 'corrupted' : ''}`}>
            <div className="character-body">
              <div className="character-face">
                {isCorrupted ? (
                  <>
                    <div className="eye left glitch">×</div>
                    <div className="eye right glitch">×</div>
                    <div className="mouth error">_</div>
                  </>
                ) : isSuspicious ? (
                  <>
                    <div className="eye left">•</div>
                    <div className="eye right">•</div>
                    <div className="mouth suspicious">~</div>
                  </>
                ) : (
                  <>
                    <div className="eye left">•</div>
                    <div className="eye right">•</div>
                    <div className="mouth">‿</div>
                  </>
                )}
              </div>
            </div>
            {isCorrupted && <div className="corruption-overlay"></div>}
          </div>
        </div>
      )}

      {isMinimized && (
        <button
          className="restore-btn game-button"
          onClick={() => setIsMinimized(false)}
        >
          {mascot.name}
        </button>
      )}
    </div>
  );
};

export default MascotGuide;
