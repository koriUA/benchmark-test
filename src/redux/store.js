import { createStore as createReduxStore, compose } from 'redux';
import defaultTo from 'lodash/defaultTo';

import {
  reducers,
  registerReducer,
  unregisterReducer,
  DYNAMIC_REDUCER_STORE_KEY,
} from './reducers';
import { createMiddleware } from './middleware';

export function createStore({ reducers, initialState, middlewareConfiguration }) {
  const { middleware, sagaMiddleware } = createMiddleware(middlewareConfiguration);
  const composeEnhancers = defaultTo(
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
    compose
  );

  // allows access to sagaMiddleware
  return Object.assign(createReduxStore(reducers, initialState, composeEnhancers(middleware)), {
    sagaMiddleware,
  });
}

export const store = createStore({ reducers });
export { registerReducer, unregisterReducer, DYNAMIC_REDUCER_STORE_KEY, reducers };
