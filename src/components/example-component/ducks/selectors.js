import { createSelector } from 'reselect';

const getText = state => state.exampleComponent.text;

export const getExampleComponentText = createSelector(
  [getText],
  exampleComponent => exampleComponent
);
