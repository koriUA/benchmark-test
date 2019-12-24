import React from 'react';

export function ConversionFunnel({ title, data, color="steelblue" }) {
  const values = Object.values(data);
  const width = 300;
  const height = 200;
  const padding = 12;
  const polygonHeight = height / values.length - padding;

  const coords = values.reduce((acc, item, index, arr) => {
    const topLineDelta = (width - width / 100 * arr[index]) / 2;
    const bottomLineDelta = (arr.length === index + 1) ?
      topLineDelta : (( width - width / 100 * arr[index + 1])) / 2;
    const offsetDelta = (padding + polygonHeight) * index + padding;
    const point1 = `${topLineDelta},${offsetDelta}`;
    const point2 = `${width - topLineDelta},${offsetDelta}`;
    const point3 = `${width - bottomLineDelta},${offsetDelta + polygonHeight}`;
    const point4 = `${bottomLineDelta},${offsetDelta + polygonHeight}`;
    acc.push([point1, point2, point3, point4].join(' '));
    return acc;
  }, []);

  return (
    <div className="conversion-funnel">
      <div className="conversion-funnel__title">{title}</div>
      <svg className='conversion-funnel__svg' width={width} height={height}>
        {coords.map(coordinate => <polygon points={coordinate} fill={color} />)}
      </svg>
    </div>
  );
}
