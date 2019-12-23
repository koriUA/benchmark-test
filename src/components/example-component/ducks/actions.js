import { SHOW_TEXT, ON_INPUT, SET_CITIES, SET_CITIES_ERROR } from './types';

export function showText(text) {
  return { type: SHOW_TEXT, text };
}

export function onInput(payload) {
  return {
    type: ON_INPUT,
    payload,
  };
}

export function setCities(payload) {
  return {
    type: SET_CITIES,
    payload,
  };
}

export function setCitiesError(payload) {
  return {
    type: SET_CITIES_ERROR,
    payload,
  };
}
