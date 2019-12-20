import axios from 'axios';
import { address } from 'faker';
import times from 'lodash/times';
import uniq from 'lodash/uniq';
import flow from 'lodash/flow';
import startsWith from 'lodash/startsWith';
import property from 'lodash/property';

import { mock } from './mocks';

const ENDPOINT = '/example-request';
const MOCK_STRINGS = uniq(times(1000, () => address.city().toLowerCase())).sort();

mock.onGet(ENDPOINT).reply(config => {
  const { params } = config;
  const { city } = params;
  const matchedCities = MOCK_STRINGS.filter(mockCity => startsWith(mockCity, params.city));

  if (matchedCities.length === 0) {
    return [404, `No cities starting with ${city} found!`];
  }

  return [200, matchedCities.slice(0, 10)];
});

const formatResponse = property('data');
const formatError = flow([property(['response', 'data']), r => Promise.reject(r)]);

export function performExampleRequest(searchString = '') {
  return axios
    .get(ENDPOINT, { params: { city: searchString } })
    .then(formatResponse)
    .catch(formatError);
}
