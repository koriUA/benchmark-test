import React from 'react';

export function ConversionFunnelFields({ fields }) {
  function camelPad(str) {
    return (
      str
        // Look for long acronyms and filter out the last letter
        .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
        // Look for lower-case letters followed by upper-case letters
        .replace(/([a-z\d])([A-Z])/g, '$1 $2')
        // Look for lower-case letters followed by numbers
        .replace(/([a-zA-Z])(\d)/g, '$1 $2')
        .replace(/^./, function(str) {
          return str.toUpperCase();
        })
        // Remove any white space left around the word
        .trim()
    );
  }

  const width = 300;
  const height = 150;
  const padding = 5;
  const polygonHeight = height / fields.length - padding;

  const coords = fields.reduce((acc, item, index) => {
    const offsetDelta = (padding + polygonHeight) * index + padding;

    acc.push({
      value: `${item}`,
      positionX: `${padding}`,
      positionY: `${polygonHeight + offsetDelta - padding}`,
      fontSize: `${polygonHeight - 10}`
    });

    return acc;
  }, []);

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
