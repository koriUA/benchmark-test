import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {DataTableSkeleton, Dropdown } from 'carbon-components-react';

const items = [
  {
    id: 1,
    text: 'Option 1',
  },
  {
    id: 2,
    text: 'Option 2',
  },
  {
    id: 3,
    text: 'Option 3',
  },
  {
    id: 4,
    text: 'Option 4',
  },
];

function App() {
  function dropdownChanged({selectedItem}) {
    console.log('selectedItem...', selectedItem);
  }

  return (
    <div className="App">
      <div style={{ width: 300 }}>
        <Dropdown
          id="1"
          label="some dropdown label..."
          selectedItem={items[2]}
          items={items}
          itemToString={item => (item ? item.text : '')}
          onChange={dropdownChanged}
        />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
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
      </div>
    </div>
  );
}

export default App;
