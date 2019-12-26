export function funnelCoords({ values, width, height, padding }) {
  const polygonHeight = height / values.length - padding;

  return values.reduce(
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
}

export function funnelFieldsCoords({ height, padding, fields }) {
  const polygonHeight = height / fields.length - padding;

  return fields.reduce((acc, item, index) => {
    const offsetDelta = (padding + polygonHeight) * index + padding;

    acc.push({
      value: `${item}`,
      positionX: `${padding}`,
      positionY: `${polygonHeight + offsetDelta - padding}`,
      fontSize: `${Math.floor(polygonHeight * 0.8)}`
    });

    return acc;
  }, []);
}
