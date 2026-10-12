import { useState } from 'react';
import type { Company, Portfolio } from '../types/game';
import PriceChart from './PriceChart';
import './CompanyDetail.css';

interface CompanyDetailProps {
  company: Company;
  portfolio: Portfolio;
  playerCash: number;
  onTrade: (type: 'buy' | 'sell', assetId: string, quantity: number, price: number) => void;
  onBack: () => void;
}

const CompanyDetail = ({ company, portfolio, playerCash, onTrade, onBack }: CompanyDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [timeRange, setTimeRange] = useState<'1D' | '1W' | '1M' | '1Y'>('1M');
  const [tradeMode, setTradeMode] = useState<'buy' | 'sell'>('buy');

  const holding = portfolio.holdings.find(h => h.assetId === company.id);
  const totalCost = quantity * company.currentPrice;
  const canAfford = totalCost <= playerCash;
  const canSell = holding && holding.quantity >= quantity;

  const handleTrade = () => {
    if (tradeMode === 'buy' && canAfford) {
      onTrade('buy', company.id, quantity, company.currentPrice);
      setQuantity(1);
    } else if (tradeMode === 'sell' && canSell) {
      onTrade('sell', company.id, quantity, company.currentPrice);
      setQuantity(1);
    }
  };

  const formatMarketCap = (value: number) => {
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="company-detail">
      {/* Header */}
      <div className="detail-header">
        <button className="back-btn cyber-button" onClick={onBack}>
          ← BACK TO CITY
        </button>
        <div className="company-header-info">
          <div className="company-logo-large">{company.logo}</div>
          <div>
            <h1 className="company-title neon-text-cyan">{company.name}</h1>
            <p className="company-ticker mono">{company.ticker}</p>
            <p className="company-sector">{company.sector}</p>
          </div>
        </div>
      </div>

      <div className="detail-content">
        {/* Left Column - Charts & Info */}
        <div className="detail-main">
          {/* Price Overview */}
          <div className="price-section cyber-panel">
            <div className="current-price">
              <span className="price-label">CURRENT PRICE</span>
              <span className="price-value neon-text-cyan mono">
                ${company.currentPrice.toFixed(2)}
              </span>
              <span className={`price-change mono ${company.priceChange >= 0 ? 'positive' : 'negative'}`}>
                {company.priceChange >= 0 ? '+' : ''}${company.priceChange.toFixed(2)} 
                ({company.priceChangePercent >= 0 ? '+' : ''}{company.priceChangePercent.toFixed(2)}%)
              </span>
            </div>
            
            <div className="market-stats">
              <div className="stat">
                <span className="stat-label">Market Cap</span>
                <span className="stat-value">{formatMarketCap(company.marketCap)}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Volume</span>
                <span className="stat-value">{(company.volume / 1e6).toFixed(2)}M</span>
              </div>
            </div>
          </div>

          {/* Price Chart */}
          <div className="chart-section cyber-panel">
            <div className="chart-header">
              <h3>PRICE HISTORY</h3>
              <div className="time-range-selector">
                {(['1D', '1W', '1M', '1Y'] as const).map((range) => (
                  <button
                    key={range}
                    className={`range-btn ${timeRange === range ? 'active' : ''}`}
                    onClick={() => setTimeRange(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            <PriceChart data={company.priceHistory} timeRange={timeRange} />
          </div>

          {/* Company Info */}
          <div className="info-section cyber-panel">
            <h3>COMPANY OVERVIEW</h3>
            <p className="company-description">{company.description}</p>
          </div>

          {/* Company Events Timeline */}
          <div className="events-section cyber-panel">
            <h3>COMPANY EVENTS</h3>
            <div className="events-timeline">
              {company.companyEvents.map((event) => (
                <div key={event.id} className="event-item">
                  <div className={`event-icon event-${event.type}`}></div>
                  <div className="event-content">
                    <span className="event-date mono">
                      {new Date(event.timestamp).toLocaleDateString()}
                    </span>
                    <h4 className="event-title">{event.title}</h4>
                    <p className="event-description">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News */}
          <div className="news-section cyber-panel">
            <h3>MARKET NEWS</h3>
            <div className="news-list">
              {company.newsEvents.map((news) => (
                <div key={news.id} className={`news-item news-${news.sentiment}`}>
                  <div className="news-header">
                    <span className="news-time mono">
                      {new Date(news.timestamp).toLocaleTimeString()}
                    </span>
                    <span className={`sentiment-badge sentiment-${news.sentiment}`}>
                      {news.sentiment}
                    </span>
                  </div>
                  <h4 className="news-headline">{news.headline}</h4>
                  <p className="news-content">{news.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Trading Panel */}
        <div className="detail-sidebar">
          {/* Current Position */}
          {holding && (
            <div className="position-panel cyber-panel">
              <h3>YOUR POSITION</h3>
              <div className="position-stats">
                <div className="position-row">
                  <span>Shares Owned</span>
                  <span className="mono">{holding.quantity}</span>
                </div>
                <div className="position-row">
                  <span>Avg. Price</span>
                  <span className="mono">${holding.averagePrice.toFixed(2)}</span>
                </div>
                <div className="position-row">
                  <span>Current Value</span>
                  <span className="mono">${holding.totalValue.toFixed(2)}</span>
                </div>
                <div className="position-divider"></div>
                <div className="position-row total">
                  <span>Profit/Loss</span>
                  <span className={`mono ${holding.gainLoss >= 0 ? 'positive' : 'negative'}`}>
                    {holding.gainLoss >= 0 ? '+' : ''}${holding.gainLoss.toFixed(2)}
                  </span>
                </div>
                <div className="position-row">
                  <span>Return</span>
                  <span className={`mono ${holding.gainLossPercent >= 0 ? 'positive' : 'negative'}`}>
                    {holding.gainLossPercent >= 0 ? '+' : ''}{holding.gainLossPercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Trading Panel */}
          <div className="trading-panel cyber-panel">
            <h3>TRADE {company.ticker}</h3>
            
            <div className="trade-mode-selector">
              <button
                className={`mode-btn ${tradeMode === 'buy' ? 'active' : ''}`}
                onClick={() => setTradeMode('buy')}
              >
                BUY
              </button>
              <button
                className={`mode-btn ${tradeMode === 'sell' ? 'active' : ''}`}
                onClick={() => setTradeMode('sell')}
              >
                SELL
              </button>
            </div>

            <div className="trade-input-group">
              <label className="input-label">QUANTITY</label>
              <input
                type="number"
                className="cyber-input"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max={tradeMode === 'sell' && holding ? holding.quantity : undefined}
              />
            </div>

            <div className="trade-summary">
              <div className="summary-row">
                <span>Price per Share</span>
                <span className="mono">${company.currentPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Quantity</span>
                <span className="mono">{quantity}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total {tradeMode === 'buy' ? 'Cost' : 'Revenue'}</span>
                <span className="mono neon-text-cyan">${totalCost.toFixed(2)}</span>
              </div>
            </div>

            {tradeMode === 'buy' && !canAfford && (
              <div className="trade-warning">
                Insufficient funds. Available: ${playerCash.toFixed(2)}
              </div>
            )}

            {tradeMode === 'sell' && !canSell && (
              <div className="trade-warning">
                Insufficient shares. You own: {holding?.quantity || 0}
              </div>
            )}

            <button
              className={`trade-btn cyber-button ${tradeMode === 'buy' ? 'cyber-button-success' : 'cyber-button-danger'}`}
              onClick={handleTrade}
              disabled={(tradeMode === 'buy' && !canAfford) || (tradeMode === 'sell' && !canSell)}
            >
              {tradeMode === 'buy' ? `BUY ${quantity} SHARES` : `SELL ${quantity} SHARES`}
            </button>

            <div className="available-cash">
              <span>Available Cash</span>
              <span className="mono">${playerCash.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
