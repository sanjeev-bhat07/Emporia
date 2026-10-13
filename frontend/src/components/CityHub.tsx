import { useState } from 'react';
import type { Company, Screen } from '../types/game';
import './CityHub.css';

interface CityHubProps {
  companies: Company[];
  onCompanySelect: (company: Company) => void;
  onNavigate: (screen: Screen) => void;
}

const CityHub = ({ companies, onCompanySelect }: CityHubProps) => {
  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null);

  // Map companies to actual building images
  const buildingImages: Record<string, string> = {
    'neon-tech': '/buildings/building1.png',
    'cyberguard': '/buildings/building2.png',
    'nutri-corp': '/buildings/building3.png',
    'quantum-energy': '/buildings/building4.png',
    'biosynth': '/buildings/building5.png',
    'stellar-mining': '/buildings/building1.png',
    'aero-transport': '/buildings/building2.png'
  };

  return (
    <div className="city-hub">
      {/* Atmospheric layers */}
      <div className="city-atmosphere">
        <div className="sky-gradient"></div>
        <div className="distant-cityscape"></div>
        <div className="atmospheric-haze"></div>
      </div>

      {/* Main city composition */}
      <div className="city-scene">
        {/* Background layer - distant buildings */}
        <div className="layer-background">
          <div className="distant-buildings"></div>
        </div>

        {/* Middle layer - main interactive area */}
        <div className="layer-main">
          {/* Central Stock Exchange - The Landmark */}
          <div className="central-exchange">
            <div className="exchange-structure">
              <img 
                src="/buildings/central-exchange.png" 
                alt="Central Stock Exchange"
                className="exchange-image"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('placeholder');
                }}
              />
              <div className="exchange-label">
                <span className="label-text">STOCK EXCHANGE</span>
                <div className="live-ticker">
                  <span className="ticker-item up">NEON +5.3%</span>
                  <span className="ticker-item down">CGRD -4.4%</span>
                  <span className="ticker-item up">NUTR +2.4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Buildings - Positioned with depth */}
          <div className="company-buildings">
            {companies.map((company, index) => {
              const buildingImg = buildingImages[company.id] || buildingImages['neon-tech'];
              const isHovered = hoveredBuilding === company.id;
              
              return (
                <div
                  key={company.id}
                  className={`building-container ${!company.available ? 'locked' : ''} ${isHovered ? 'hovered' : ''}`}
                  style={{
                    '--building-index': index,
                    '--position-x': company.position.x,
                    '--position-y': company.position.y
                  } as React.CSSProperties}
                  onMouseEnter={() => company.available && setHoveredBuilding(company.id)}
                  onMouseLeave={() => setHoveredBuilding(null)}
                  onClick={() => company.available && onCompanySelect(company)}
                >
                  <div className="building-wrapper">
                    <img 
                      src={buildingImg}
                      alt={company.name}
                      className="building-image"
                      onError={(e) => {
                        // Fallback placeholder
                        e.currentTarget.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'building-placeholder';
                        placeholder.style.background = company.visualStyle.primaryColor;
                        e.currentTarget.parentElement?.appendChild(placeholder);
                      }}
                    />
                    
                    {/* Subtle indicator for interactive buildings */}
                    {company.available && (
                      <div className="interaction-hint"></div>
                    )}
                    
                    {/* Lock overlay for unavailable buildings */}
                    {!company.available && (
                      <div className="locked-overlay">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Info card - appears on hover */}
                  {isHovered && (
                    <div className="building-info">
                      <div className="info-header">
                        <h3>{company.name}</h3>
                        <span className="ticker">{company.ticker}</span>
                      </div>
                      <p className="sector">{company.sector}</p>
                      <div className="price-snapshot">
                        <span className="price">${company.currentPrice.toFixed(2)}</span>
                        <span className={`change ${company.priceChange >= 0 ? 'positive' : 'negative'}`}>
                          {company.priceChange >= 0 ? '↑' : '↓'} {Math.abs(company.priceChangePercent).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Foreground layer - environmental details */}
        <div className="layer-foreground">
          <div className="street-level">
            <div className="ground-elements"></div>
          </div>
        </div>
      </div>

      {/* Subtle environmental effects */}
      <div className="ambient-particles"></div>
    </div>
  );
};

export default CityHub;
