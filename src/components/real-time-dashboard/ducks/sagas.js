import { throttle } from 'redux-saga/effects';

import { ON_INPUT } from './types';

// import { performExampleRequest } from 'services/example-request';

export function* handleInput({ payload }) {
  try {
    console.log('handleInput...', payload);
    // const response = yield call(performExampleRequest, payload);
    yield 1;
    // yield put(setCities(response));
  } catch (e) {
    // yield put(setCitiesError(e));
  }
}

export function* realTimeDashboardRootSaga() {
  yield throttle(500, ON_INPUT, handleInput);
}
