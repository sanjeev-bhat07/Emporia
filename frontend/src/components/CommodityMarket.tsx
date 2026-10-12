import type { Commodity, Portfolio } from '../types/game';
import './CommodityMarket.css';

interface CommodityMarketProps {
  commodities: Commodity[];
  portfolio: Portfolio;
  playerCash: number;
  onCommoditySelect: (commodity: Commodity) => void;
  onTrade: (type: 'buy' | 'sell', assetId: string, quantity: number, price: number) => void;
  onBack: () => void;
}

const CommodityMarket = ({ commodities, onCommoditySelect, onBack }: CommodityMarketProps) => {
  return (
    <div className="commodity-market">
      <div className="market-header">
        <button className="back-btn cyber-button" onClick={onBack}>
          ← BACK
        </button>
        <h1 className="market-title neon-text-cyan">COMMODITY EXCHANGE</h1>
      </div>

      <div className="commodities-grid">
        {commodities.map((commodity) => (
          <div
            key={commodity.id}
            className={`commodity-card cyber-panel ${!commodity.available ? 'locked' : ''}`}
            onClick={() => commodity.available && onCommoditySelect(commodity)}
            style={{
              '--commodity-color': commodity.visualStyle.primaryColor,
              '--commodity-accent': commodity.visualStyle.accentColor
            } as React.CSSProperties}
          >
            <div className="commodity-icon" style={{ color: commodity.visualStyle.primaryColor }}>
              {commodity.visualStyle.icon}
            </div>
            
            <div className="commodity-info">
              <h3 className="commodity-name">{commodity.name}</h3>
              <p className="commodity-symbol mono">{commodity.symbol}</p>
              
              {commodity.available ? (
                <>
                  <div className="commodity-price">
                    <span className="price mono">${commodity.currentPrice.toFixed(2)}</span>
                    <span className={`change mono ${commodity.priceChange >= 0 ? 'positive' : 'negative'}`}>
                      {commodity.priceChange >= 0 ? '+' : ''}{commodity.priceChangePercent.toFixed(2)}%
                    </span>
                  </div>
                  
                  <div className="supply-demand">
                    <div className="supply-bar">
                      <div className="bar-fill" style={{ width: `${commodity.supplyDemand.supply}%` }}></div>
                    </div>
                    <span className={`trend trend-${commodity.supplyDemand.trend}`}>
                      {commodity.supplyDemand.trend}
                    </span>
                  </div>
                </>
              ) : (
                <div className="locked-overlay">
                  <span className="lock-icon">🔒</span>
                  <span>LOCKED</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommodityMarket;
