import type { Portfolio as PortfolioType, Player } from '../types/game';
import './Portfolio.css';

interface PortfolioProps {
  portfolio: PortfolioType;
  player: Player;
  onBack: () => void;
}

const Portfolio = ({ portfolio, player, onBack }: PortfolioProps) => {
  return (
    <div className="portfolio-screen">
      <div className="portfolio-header">
        <button className="back-btn cyber-button" onClick={onBack}>
          ← BACK
        </button>
        <h1 className="portfolio-title neon-text-cyan">YOUR PORTFOLIO</h1>
      </div>

      <div className="portfolio-overview cyber-panel">
        <div className="overview-stat">
          <span className="stat-label">TOTAL VALUE</span>
          <span className="stat-value neon-text-cyan mono">${(player.cash + portfolio.totalValue).toLocaleString()}</span>
        </div>
        <div className="overview-stat">
          <span className="stat-label">LIQUID CASH</span>
          <span className="stat-value mono">${player.cash.toLocaleString()}</span>
        </div>
        <div className="overview-stat">
          <span className="stat-label">HOLDINGS VALUE</span>
          <span className="stat-value mono">${portfolio.totalValue.toLocaleString()}</span>
        </div>
        <div className="overview-stat">
          <span className="stat-label">PROFIT/LOSS</span>
          <span className={`stat-value mono ${portfolio.totalGainLoss >= 0 ? 'positive' : 'negative'}`}>
            {portfolio.totalGainLoss >= 0 ? '+' : ''}${portfolio.totalGainLoss.toLocaleString()} ({portfolio.totalGainLossPercent >= 0 ? '+' : ''}{portfolio.totalGainLossPercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      <div className="holdings-section">
        <h2 className="section-title">HOLDINGS</h2>
        <div className="holdings-grid">
          {portfolio.holdings.map((holding) => (
            <div key={holding.assetId} className="holding-card cyber-panel">
              <div className="holding-header">
                <h3>{holding.assetName}</h3>
                <span className="holding-type">{holding.assetType}</span>
              </div>
              <div className="holding-stats">
                <div className="stat-row">
                  <span>Quantity</span>
                  <span className="mono">{holding.quantity}</span>
                </div>
                <div className="stat-row">
                  <span>Avg. Price</span>
                  <span className="mono">${holding.averagePrice.toFixed(2)}</span>
                </div>
                <div className="stat-row">
                  <span>Current Price</span>
                  <span className="mono">${holding.currentPrice.toFixed(2)}</span>
                </div>
                <div className="stat-row total">
                  <span>Total Value</span>
                  <span className="mono neon-text-cyan">${holding.totalValue.toFixed(2)}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-row">
                  <span>P/L</span>
                  <span className={`mono ${holding.gainLoss >= 0 ? 'positive' : 'negative'}`}>
                    {holding.gainLoss >= 0 ? '+' : ''}${holding.gainLoss.toFixed(2)} ({holding.gainLossPercent >= 0 ? '+' : ''}{holding.gainLossPercent.toFixed(2)}%)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="transactions-section">
        <h2 className="section-title">RECENT TRANSACTIONS</h2>
        <div className="transactions-list cyber-panel">
          {portfolio.transactions.slice(0, 10).map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-time mono">{new Date(transaction.timestamp).toLocaleString()}</div>
              <div className="transaction-details">
                <span className={`transaction-type ${transaction.type}`}>{transaction.type.toUpperCase()}</span>
                <span className="transaction-asset">{transaction.assetName}</span>
              </div>
              <div className="transaction-amounts mono">
                <span>{transaction.quantity} × ${transaction.price.toFixed(2)}</span>
                <span className={transaction.type === 'buy' ? 'negative' : 'positive'}>
                  {transaction.type === 'buy' ? '-' : '+'}${transaction.totalValue.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
