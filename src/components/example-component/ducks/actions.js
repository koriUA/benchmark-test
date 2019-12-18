import { SHOW_TEXT } from './types';

export function showText(text) {
  return { type: SHOW_TEXT, text };
}
