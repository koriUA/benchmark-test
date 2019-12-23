import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import { DYNAMIC_REDUCER_STORE_KEY } from '../../../redux/store';
import { performExampleRequest } from '../../../services/example-request';

import { citiesSelector, errorSelector } from './selectors';
import { setCities } from './actions';
import { handleInput } from './sagas';

describe('example component redux', () => {
  describe('selectors', () => {
    it('citiesSelector should return correct slice of state', () => {
      expect(citiesSelector({})).not.toBeDefined();
      expect(
        citiesSelector({
          [DYNAMIC_REDUCER_STORE_KEY]: {
            input: {
              cities: ['Cityname'],
            },
          },
        })
      ).toEqual(['Cityname']);
    });
    it('errorSelector should return correct slice of state', () => {
      expect(errorSelector({})).not.toBeDefined();
      expect(
        errorSelector({
          [DYNAMIC_REDUCER_STORE_KEY]: {
            input: {
              error: 'Something gone wrong',
            },
          },
        })
      ).toEqual('Something gone wrong');
    });
  });

  describe('sagas', () => {
    let gen;

    beforeEach(() => {
      gen = cloneableGenerator(handleInput)({ payload: 'cityname' });
    });

    it('should perform request', () => {
      const clone = gen.clone();

      expect(clone.next().value).toEqual(call(performExampleRequest, 'cityname'));
      expect(clone.next(['cityname']).value).toEqual(put(setCities(['cityname'])));
    });
  });
});
