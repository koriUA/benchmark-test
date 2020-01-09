import { ON_INPUT } from './types';

export function onInput(payload) {
  return {
    type: ON_INPUT,
    payload,
  };
}
