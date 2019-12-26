import React from 'react';
import { funnelCoords } from '../utils/conversionFunnelCoords';

export function ConversionFunnel({
  title,
  data,
  color = 'blue',
  width = '300',
  padding = 5
}) {
  const values = Object.values(data);
  const height = width / 2;

  const coords = funnelCoords({ values, width, height, padding });

  return (
    <div className="conversion-funnel">
      <div className="conversion-funnel__title">{title}</div>
      <svg className="conversion-funnel__svg" width={width} height={height}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: `steelblue`, stopOpacity: 1 }}
            />
            <stop
              offset="33%"
              style={{ stopColor: `lightblue`, stopOpacity: 1 }}
            />
            <stop
              offset="66%"
              style={{ stopColor: `steelblue`, stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: `lightblue`, stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: `darkorange`, stopOpacity: 1 }}
            />
            <stop
              offset="33%"
              style={{ stopColor: `moccasin`, stopOpacity: 1 }}
            />
            <stop
              offset="66%"
              style={{ stopColor: `darkorange`, stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: `moccasin`, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {coords.diagram.map(coordinate => (
          <polygon
            points={coordinate}
            fill={color === 'blue' ? 'url(#grad1)' : 'url(#grad2)'}
            stroke="black"
          />
        ))}
        {coords.text.map(text => (
          <text
            x={text.positionX}
            y={text.positionY}
            dx={((6 - text.value.length) * text.fontSize) / 2}
            style={{
              fontSize: `${text.fontSize}px`,
              transform: `translateX(-40%)`,
              fill: '#333333'
            }}
          >
            {text.value}
          </text>
        ))}
      </svg>
    </div>
  );
}
