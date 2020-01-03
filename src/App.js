import React, { useState, useEffect } from 'react';
import './App.scss';
import { DataTableSkeleton, Loading } from 'carbon-components-react';
import { ConversionFunnelTable } from './components/ConversionFunnelTable';
import { asyncResponse } from './SCFDemoData';
import VerticalCompare from './components/VerticalCompare/VerticalCompare';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    asyncResponse().then(response => setData(response));
  }, []);

  return (
    <div className="App">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-lg-12">
            <div
              style={{
                width: '100%'
              }}
            >
              <DataTableSkeleton
                columnCount={5}
                compact={false}
                headers={[
                  'Name',
                  'Protocol',
                  'Port',
                  'Rule',
                  'Attached Groups'
                ]}
                rowCount={5}
                zebra={false}
              />
              <br />
            </div>
          </div>
        </div>
        <div className="bx-row">
          {!data ? (
            <div style={{ margin: `30px auto` }}>
              <Loading withOverlay={false} style={{ margin: '30px auto' }} />
            </div>
          ) : (
            <ConversionFunnelTable {...data} />
          )}
        </div>
      </div>
      <div style={{ width: '800px' }}>
        <VerticalCompare />
      </div>
    </div>
  );
}

export default App;
