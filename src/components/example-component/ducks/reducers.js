import { SHOW_TEXT } from './types';

export function exampleComponent(state = {}, action) {
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
