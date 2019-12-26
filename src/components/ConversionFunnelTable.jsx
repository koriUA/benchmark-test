import React from 'react';
import { ConversionFunnel } from './ConversionFunnel';
import { ConversionFunnelFields } from './ConversionFunnelFields';
import { monthAndYear } from '../utils/dateTransformation';

export function ConversionFunnelTable({ title, date, data }) {
  const padding = 5;
  const width = 300;

  const fields = Object.keys(data[0].funnelData);
  return (
    <div className="conversion-funnel-table">
      <div className="conversion-funnel-table__header">
        <div className="conversion-funnel-table__title">{title}</div>
        <div className="conversion-funnel-table__date">
          {monthAndYear(date)}
        </div>
      </div>
      <div className="bx--row">
        {data.map((item, index) => {
          return (
            <div className="bx--col-max-3 bx--col-lg-3" key={index}>
              <ConversionFunnel
                data={item.funnelData}
                title={item.title}
                color={index === 0 ? 'blue' : 'orange'}
                width={width}
                padding={padding}
              />
            </div>
          );
        })}
        <div className="bx--col-max-3 bx--col-lg-3">
          <ConversionFunnelFields
            fields={fields}
            width={width}
            padding={padding}
          />
        </div>
      </div>
    </div>
  );
}
