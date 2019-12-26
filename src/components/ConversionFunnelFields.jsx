import React from 'react';
import { funnelFieldsCoords } from '../utils/conversionFunnelCoords';
import { camelPad } from '../utils/textTransformations';

export function ConversionFunnelFields({ fields, width = 300, padding = 5 }) {
  const height = width / 2;
  const coords = funnelFieldsCoords({ height, padding, fields });

  return (
    <div>
      <div style={{ opacity: 0 }}>{'!'}</div>
      <svg width={width} height={height}>
        {coords.map(field => (
          <text
            x={field.positionX}
            y={field.positionY}
            style={{ fontSize: `${field.fontSize}px`, fill: '#333333' }}
          >
            {camelPad(field.value)}
          </text>
        ))}
      </svg>
    </div>
  );
}
