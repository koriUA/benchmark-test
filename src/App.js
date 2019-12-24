import React from 'react';
import './App.scss';
import { DataTableSkeleton } from 'carbon-components-react';
import { ConversionFunnelTable } from './components/ConversionFunnelTable';
import { response } from './SCFDemoData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test...</h1>
      </header>
      <div className="bx--grid">
         <div className="bx--row">
          <div className="bx--col-md-4 bx--col-lg-4">1/3</div>
          <div className="bx--col-md-4 bx--col-lg-4">1/3</div>
          <div className="bx--col-md-4 bx--col-lg-4">1/3</div>
        </div>
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
          <ConversionFunnelTable {...response} />
        </div>
      </div>
    </div>
  );
}

export default App;
