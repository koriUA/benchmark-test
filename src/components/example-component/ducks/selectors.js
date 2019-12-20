import { createSelector } from 'reselect';
import property from 'lodash/property';

import { DYNAMIC_REDUCER_STORE_KEY } from '../../../redux/reducers';

const getText = property(['exampleComponent', 'text']);

export const getExampleComponentText = createSelector(
  [getText],
  exampleComponent => exampleComponent
);
export const citiesSelector = property([DYNAMIC_REDUCER_STORE_KEY, 'input', 'cities']);
export const errorSelector = property([DYNAMIC_REDUCER_STORE_KEY, 'input', 'error']);
