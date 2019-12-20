'use strict';
import React from 'react';

import enzyme from 'enzyme';
import { shallowToJson, mountToJson, renderToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

// To support storybooks inside jest
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

registerRequireContextHook();

enzyme.configure({ adapter: new Adapter() });

// Needed to support enzyme mount
require('./setupJSDom');

// Needed to use d3 in tests
class SVGPathElement extends HTMLElement {}

window.SVGPathElement = SVGPathElement;

// Needed so that any component that uses sizeme can be jest tested
import sizeMe from 'react-sizeme';

sizeMe.noPlaceholders = true;

jest.mock('moment', () => {
  const moment = require.requireActual('moment-timezone');
  // Force the timezone to be the same everywhere
  moment.fn.local = moment.fn.utc; // mock the local function to return utc

  moment.tz.setDefault('America/Chicago');

  return moment;
});
Date.prototype.getTimezoneOffset = () => 300; // mock date offset
Date.now = jest.fn(() => 1537538254000); // mock internal date
Date.prototype.getLocaleString = () => 'Mock Date!';

global.shallow = enzyme.shallow;
global.mount = enzyme.mount;
global.render = enzyme.render;
global.shallowToJson = shallowToJson;
global.mountToJson = mountToJson;
global.renderToJson = renderToJson;
global.React = React;

// added to disable logging in test mode
jest.mock('../../src/redux/store', () => {
  const actualStore = require.requireActual('../../src/redux/store');

  return {
    ...actualStore,
    store: actualStore.createStore({
      reducers: actualStore.reducers,
      middlewareConfiguration: { loggerConfig: { predicate: () => false } },
    }),
  };
});
