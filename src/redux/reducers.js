import { combineReducers } from 'redux';
import partial from 'lodash/partial';
import invoke from 'lodash/invoke';

import { reducer as exampleComponent } from '../components/example-component/ducks/reducers';

// Allows to register reducers in the conventional way
export const syncReducers = {
  exampleComponent,
};

export const DYNAMIC_REDUCER_STORE_KEY = 'dynamic';
function createCommonReducer({ defaultDynamicState = {}, defaultReducer = {} }) {
  const registeredReducers = new Set();

  const resultReducer = combineReducers({
    ...defaultReducer,
    [DYNAMIC_REDUCER_STORE_KEY]: (state = defaultDynamicState, action) =>
      [...registeredReducers].reduce((resState, reduce) => reduce(resState, action), state),
  });

  const unregisterReducer = partial(invoke, registeredReducers, 'delete');
  const registerReducer = partial(invoke, registeredReducers, 'add');

  return {
    reducers: resultReducer,
    unregisterReducer,
    registerReducer,
  };
}

export const { reducers, unregisterReducer, registerReducer } = createCommonReducer({
  defaultReducer: syncReducers,
});
