import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

export const GoldPriceChart: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'all' | 'arima' | 'sma' | 'wma'>('all');
  const [hoveredPoint, setHoveredPoint] = useState<{ year: string; price: number; type: string } | null>(null);

  // Time-series coordinates mapped to SVG viewbox (0 0 600 240)
  const historicalPoints = [
    { year: '2015', price: 1160, x: 40, y: 190 },
    { year: '2016', price: 1250, x: 80, y: 178 },
    { year: '2017', price: 1260, x: 120, y: 176 },
    { year: '2018', price: 1270, x: 160, y: 174 },
    { year: '2019', price: 1390, x: 200, y: 156 },
    { year: '2020', price: 1770, x: 240, y: 104 },
    { year: '2021', price: 1800, x: 280, y: 100 },
    { year: '2022', price: 1800, x: 320, y: 100 },
    { year: '2023', price: 1940, x: 360, y: 80 },
    { year: '2024', price: 2380, x: 400, y: 35 },
  ];

  const smaPoints = [
    { x: 120, y: 181 },
    { x: 160, y: 176 },
    { x: 200, y: 162 },
    { x: 240, y: 145 },
    { x: 280, y: 120 },
    { x: 320, y: 102 },
    { x: 360, y: 92 },
    { x: 400, y: 65 },
  ];

  const forecastPoints = [
    { year: '2025', price: 2450, x: 400, y: 35 },
    { year: '2028', price: 2620, x: 450, y: 30 },
    { year: '2032', price: 2840, x: 500, y: 24 },
    { year: '2036', price: 3050, x: 540, y: 20 },
    { year: '2040', price: 3300, x: 575, y: 16 },
  ];

  const historicalPath = historicalPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ');
  const smaPath = smaPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ');
  const forecastPath = forecastPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ');

  return (
    <div className="w-full neo-inset rounded-2xl p-4 sm:p-5 flex flex-col gap-3">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/50 pb-2.5">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold text-slate-800">
            Gold Price Time-Series Analysis & Projections (through 2040)
          </span>
        </div>

        {/* Model toggles */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveModel('all')}
            className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
              activeModel === 'all'
                ? 'bg-blue-600 text-white'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveModel('arima')}
            className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
              activeModel === 'arima'
                ? 'bg-blue-600 text-white'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            ARIMA
          </button>
          <button
            onClick={() => setActiveModel('sma')}
            className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
              activeModel === 'sma'
                ? 'bg-blue-600 text-white'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            SMA/WMA
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="relative w-full aspect-[2/1] bg-slate-900/90 rounded-xl overflow-hidden p-2">
        <svg viewBox="0 0 600 240" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="forecastBandLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="histFillLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="40" y1="40" x2="580" y2="40" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="40" y1="90" x2="580" y2="90" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="40" y1="140" x2="580" y2="140" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="40" y1="190" x2="580" y2="190" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />

          {/* Division boundary between historical and forecast */}
          <line x1="400" y1="20" x2="400" y2="210" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
          <rect x="400" y="20" width="180" height="190" fill="#1e293b" fillOpacity="0.3" />

          <text x="390" y="30" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="sans-serif">
            Historical Data (2015-2024)
          </text>
          <text x="410" y="30" fill="#60a5fa" fontSize="9" textAnchor="start" fontFamily="sans-serif" fontWeight="bold">
            ARIMA Projections (2025-2040)
          </text>

          {/* Forecast confidence envelope polygon */}
          {(activeModel === 'all' || activeModel === 'arima') && (
            <polygon
              points="400,35 450,22 500,14 540,10 575,6 575,34 540,40 500,48 450,56 400,35"
              fill="url(#forecastBandLight)"
            />
          )}

          {/* Historical trend line */}
          <path
            d={`${historicalPath} L 400,210 L 40,210 Z`}
            fill="url(#histFillLight)"
          />
          <path
            d={historicalPath}
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* SMA / WMA Line */}
          {(activeModel === 'all' || activeModel === 'sma') && (
            <path
              d={smaPath}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
          )}

          {/* Forecast Trend Line */}
          {(activeModel === 'all' || activeModel === 'arima') && (
            <path
              d={forecastPath}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />
          )}

          {/* Data Points */}
          {historicalPoints.map((pt, idx) => (
            <circle
              key={idx}
              cx={pt.x}
              cy={pt.y}
              r="3.5"
              fill="#10b981"
              stroke="#ffffff"
              strokeWidth="1"
              className="cursor-pointer hover:r-5 transition-all"
              onMouseEnter={() => setHoveredPoint({ year: pt.year, price: pt.price, type: 'Historical Actual' })}
              onMouseLeave={() => setHoveredPoint(null)}
            />
          ))}

          {forecastPoints.slice(1).map((pt, idx) => (
            <circle
              key={`fc-${idx}`}
              cx={pt.x}
              cy={pt.y}
              r="3.5"
              fill="#38bdf8"
              stroke="#ffffff"
              strokeWidth="1"
              className="cursor-pointer hover:r-5 transition-all"
              onMouseEnter={() => setHoveredPoint({ year: pt.year, price: pt.price, type: 'Model Projection' })}
              onMouseLeave={() => setHoveredPoint(null)}
            />
          ))}

          {/* Axis Labels */}
          <text x="40" y="222" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">2015</text>
          <text x="240" y="222" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">2020</text>
          <text x="400" y="222" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">2024</text>
          <text x="500" y="222" fill="#60a5fa" fontSize="9" textAnchor="middle" fontFamily="monospace">2032</text>
          <text x="575" y="222" fill="#60a5fa" fontSize="9" textAnchor="middle" fontFamily="monospace">2040</text>
        </svg>

        {/* Dynamic Tooltip on Hover */}
        {hoveredPoint && (
          <div className="absolute top-3 left-4 bg-slate-800/90 text-white font-mono text-[10px] rounded px-2.5 py-1.5 border border-slate-700 pointer-events-none shadow-lg">
            <span className="text-slate-400">{hoveredPoint.type}</span> · <span className="font-bold text-amber-400">{hoveredPoint.year}</span>: ${hoveredPoint.price.toLocaleString()}/oz
          </div>
        )}
      </div>

      {/* Evaluation Metrics Footer */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
        <div className="neo-surface rounded-lg p-2 flex flex-col">
          <span className="text-slate-500 text-[10px]">Method</span>
          <span className="font-bold text-slate-800">ARIMA + SMA/WMA</span>
        </div>
        <div className="neo-surface rounded-lg p-2 flex flex-col">
          <span className="text-slate-500 text-[10px]">Metrics</span>
          <span className="font-bold text-blue-600">MAE · MSE · MAPE</span>
        </div>
        <div className="neo-surface rounded-lg p-2 flex flex-col">
          <span className="text-slate-500 text-[10px]">Scope</span>
          <span className="font-bold text-slate-800">Historical & 2040</span>
        </div>
        <div className="neo-surface rounded-lg p-2 hidden sm:flex flex-col">
          <span className="text-slate-500 text-[10px]">Tooling</span>
          <span className="font-bold text-slate-800">Pandas / Matplotlib</span>
        </div>
      </div>
    </div>
  );
};
