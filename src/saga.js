import { call, put, all, takeLatest } from 'redux-saga/effects';
import { actionTypes } from './constants';
import { fetchDataSuccess, fetchDataFailed } from './actions';

const { FETCH_DATA_REQUEST } = actionTypes;

function* fetchData({ url }) {
  try {
    const response = yield call(fetch, url);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const { apartments } = yield call([response, 'json']);
    yield put(fetchDataSuccess({ apartments }));
  } catch (e) {
    console.error(e);
    yield put(fetchDataFailed());
  }
}

export default function* saga({ url }) {
  yield all([takeLatest(FETCH_DATA_REQUEST, fetchData, { url })]);
}
