import { throttle, put } from 'redux-saga/effects';
import get from 'lodash/get';
import property from 'lodash/property';

import { registerReducer, store, DYNAMIC_REDUCER_STORE_KEY } from '../../redux/store';

// actions
const ON_INPUT = 'ON_INPUT';
const SET_INPUT = 'SET_INPUT';
const SET_INPUT_ERROR = 'SET_INPUT_ERROR';

// action creators
export function onInput(payload) {
  return {
    type: ON_INPUT,
    payload,
  };
}

function setInput(payload) {
  return {
    type: SET_INPUT,
    payload,
  };
}

function setInputError(payload) {
  return {
    type: SET_INPUT_ERROR,
    payload,
  };
}

// sagas
const TEST_REGEXP = /^[a-z]*$/;
function* handleInput({ payload }) {
  if (TEST_REGEXP.test(payload)) {
    yield put(setInput(payload));
  } else {
    yield put(
      setInputError(`Input error: text "${payload}" should contain only lowercase characters`)
    );
  }
}

function* testSaga() {
  yield throttle(500, ON_INPUT, handleInput);
}

// registering test saga
store.sagaMiddleware.run(testSaga);

// selectors
export const valueSelector = property([DYNAMIC_REDUCER_STORE_KEY, 'input', 'text']);
export const errorSelector = property([DYNAMIC_REDUCER_STORE_KEY, 'input', 'error']);

// reducers
function testReducer(state, action) {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: {
          ...get(state, 'input'),
          text: action.payload,
          error: '',
        },
      };
    case SET_INPUT_ERROR:
      return {
        ...state,
        input: {
          ...get(state, 'input'),
          text: '',
          error: action.payload,
        },
      };
    default:
      return state;
  }
}

// register reducer on-flight
registerReducer(testReducer);
