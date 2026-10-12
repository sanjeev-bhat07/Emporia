import type { PricePoint } from '../types/game';
import './PriceChart.css';

interface PriceChartProps {
  data: PricePoint[];
  timeRange: '1D' | '1W' | '1M' | '1Y';
}

const PriceChart = ({ data, timeRange }: PriceChartProps) => {
  // Filter data based on time range
  const now = Date.now();
  const timeRanges = {
    '1D': 24 * 60 * 60 * 1000,
    '1W': 7 * 24 * 60 * 60 * 1000,
    '1M': 30 * 24 * 60 * 60 * 1000,
    '1Y': 365 * 24 * 60 * 60 * 1000
  };

  const filteredData = data.filter(
    point => now - point.timestamp <= timeRanges[timeRange]
  );

  if (filteredData.length === 0) return <div>No data available</div>;

  // Calculate chart dimensions
  const prices = filteredData.map(p => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;
  const padding = priceRange * 0.1;

  const chartHeight = 300;
  const chartWidth = 100;

  // Generate SVG path
  const points = filteredData.map((point, index) => {
    const x = (index / (filteredData.length - 1)) * chartWidth;
    const y = chartHeight - ((point.price - minPrice + padding) / (priceRange + 2 * padding)) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  const isPositive = filteredData[filteredData.length - 1].price >= filteredData[0].price;

  return (
    <div className="price-chart">
      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        preserveAspectRatio="none"
        className="chart-svg"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isPositive ? 'var(--cyber-toxic-green)' : 'var(--cyber-warning-red)'} stopOpacity="0.3" />
            <stop offset="100%" stopColor={isPositive ? 'var(--cyber-toxic-green)' : 'var(--cyber-warning-red)'} stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Area under curve */}
        <polygon
          points={`0,${chartHeight} ${points} ${chartWidth},${chartHeight}`}
          fill="url(#chartGradient)"
        />
        
        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke={isPositive ? 'var(--cyber-toxic-green)' : 'var(--cyber-warning-red)'}
          strokeWidth="2"
          className="chart-line"
        />
      </svg>
    </div>
  );
};

export default PriceChart;
