import React from 'react';
import { ConversionFunnel } from './ConversionFunnel';
import { ConversionFunnelFields } from './ConversionFunnelFields';

export function ConversionFunnelTable({ title, date, data }) {
  // temporary solution
  const dateFormat = date => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return `${monthNames[date.getMonth()].substring(
      0,
      3
    )} ${date.getFullYear()}`;
  };

  console.log(data);

  const fields = Object.keys(data[0].funnelData);
  return (
    <div className="conversion-funnel-table">
      <div className="conversion-funnel-table__header">
        <div className="conversion-funnel-table__title">{title}</div>
        <div className="conversion-funnel-table__date">{dateFormat(date)}</div>
      </div>
      <div className="bx--row">
        {data.map((item, index) => {
          return (
            <div className="bx--col-max-3 bx--col-lg-3" key={index}>
              <ConversionFunnel
                data={item.funnelData}
                title={item.title}
                color={index === 0 ? 'blue' : 'orange'}
              />
            </div>
          );
        })}
        <div className="bx--col-max-3 bx--col-lg-3">
          <ConversionFunnelFields fields={fields} />
        </div>
      </div>
    </div>
  );
}
