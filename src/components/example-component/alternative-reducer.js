import { throttle, put, call } from 'redux-saga/effects';
import get from 'lodash/get';
import property from 'lodash/property';

import { registerReducer, store, DYNAMIC_REDUCER_STORE_KEY } from '../../redux/store';
import { performExampleRequest } from '../../api/example-request';

// actions
const ON_INPUT = 'ON_INPUT';
const SET_CITIES = 'SET_CITIES';
const SET_CITIES_ERROR = 'SET_CITIES_ERROR';

// action creators
export function onInput(payload) {
  return {
    type: ON_INPUT,
    payload,
  };
}

function setCities(payload) {
  return {
    type: SET_CITIES,
    payload,
  };
}

function setCitiesError(payload) {
  return {
    type: SET_CITIES_ERROR,
    payload,
  };
}

// sagas
function* handleInput({ payload }) {
  try {
    const response = yield call(performExampleRequest, payload);

    yield put(setCities(response));
  } catch (e) {
    yield put(setCitiesError(e));
  }
}

function* testSaga() {
  yield throttle(500, ON_INPUT, handleInput);
}

// registering test saga
store.sagaMiddleware.run(testSaga);

// selectors
export const citiesSelector = property([DYNAMIC_REDUCER_STORE_KEY, 'input', 'cities']);
export const errorSelector = property([DYNAMIC_REDUCER_STORE_KEY, 'input', 'error']);

// reducers
function testReducer(state, action) {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        input: {
          ...get(state, 'input'),
          cities: action.payload,
          error: '',
        },
      };
    case SET_CITIES_ERROR:
      return {
        ...state,
        input: {
          ...get(state, 'input'),
          cities: [],
          error: action.payload,
        },
      };
    default:
      return state;
  }
}

// register reducer on-flight
registerReducer(testReducer);
