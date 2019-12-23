import get from 'lodash/get';

import { SHOW_TEXT, SET_CITIES, SET_CITIES_ERROR } from './types';

export function reducer(state = {}, action) {
  switch (action.type) {
    case SHOW_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
}

export function testReducer(state, action) {
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
