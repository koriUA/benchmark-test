import { throttle, put, call } from 'redux-saga/effects';

import { performExampleRequest } from '../../../services/example-request';

import { ON_INPUT } from './types';
import { setCities, setCitiesError } from './actions';

export function* handleInput({ payload }) {
  try {
    const response = yield call(performExampleRequest, payload);

    yield put(setCities(response));
  } catch (e) {
    yield put(setCitiesError(e));
  }
}

export function* testSaga() {
  yield throttle(500, ON_INPUT, handleInput);
}
