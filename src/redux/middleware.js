import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import get from 'lodash/get';

export function createMiddleware(options) {
  const loggerConfig = get(options, 'loggerConfig');
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, createLogger(loggerConfig)];

  return {
    middleware: applyMiddleware(...middleware),
    sagaMiddleware,
  };
}
