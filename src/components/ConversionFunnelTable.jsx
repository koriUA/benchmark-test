import React from 'react';
import { ConversionFunnel } from './ConversionFunnel';

export function ConversionFunnelTable({ title, date, data }) {
  const fields = Object.keys(data);
  return (
    <div className="conversion-funnel-table">
      <div className="conversion-funnel-table__header">
        <div className="conversion-funnel-table__title">{title}</div>
        <div className="conversion-funnel-table__date">
          {date.toISOString()}
        </div>
      </div>
      <div className="bx--row">
        {data.map((item, index) => {
          console.log(item);
          return (
            <div className="bx--col-max-3 bx--col-lg-3" key={index}>
              <ConversionFunnel data={item.funnelData} title={item.title} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
