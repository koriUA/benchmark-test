import React from 'react';

export function ConversionFunnel({ title, data, color = 'blue' }) {
  const values = Object.values(data);
  const width = 300;
  const height = 150;
  const padding = 5;
  const polygonHeight = height / values.length - padding;

  const coords = values.reduce(
    (acc, item, index, arr) => {
      const diagramWidth = height;
      const topLineDelta =
        (diagramWidth - (diagramWidth / 100) * arr[index]) / 2;
      const bottomLineDelta =
        arr.length === index + 1
          ? topLineDelta
          : (diagramWidth - (diagramWidth / 100) * arr[index + 1]) / 2;
      const offsetDelta = (padding + polygonHeight) * index + padding;

      const point1 = `${topLineDelta},${offsetDelta}`;
      const point2 = `${diagramWidth - topLineDelta},${offsetDelta}`;
      const point3 = `${diagramWidth - bottomLineDelta},${offsetDelta +
        polygonHeight}`;
      const point4 = `${bottomLineDelta},${offsetDelta + polygonHeight}`;

      acc.diagram.push([point1, point2, point3, point4].join(' '));

      acc.text.push({
        value: `${values[index].toFixed(2)}%`,
        positionX: `${width - padding}`,
        positionY: `${polygonHeight + offsetDelta - padding}`,
        fontSize: `${polygonHeight - 2}`
      });

      return acc;
    },
    { diagram: [], text: [] }
  );

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
