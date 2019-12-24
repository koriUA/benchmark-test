import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {DataTableSkeleton, Dropdown, Loading } from 'carbon-components-react';
import VerticalCompare from './components/VerticalCompare/VerticalCompare';


function App() {

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
      </div>
      <div style={{width: '800px'}}>
        <VerticalCompare />
      </div>

    </div>
  );
}

export default App;
