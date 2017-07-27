import { handleActions } from 'redux-actions';
import { actionTypes } from './constants';

const { FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } = actionTypes;

function fetchDataSuccess(state, { payload: { apartments } }) {
  return { ...state, apartments };
}

function fetchDataFailed(state) {
  return { ...state, apartments: [] };
}

export default handleActions(
  {
    [FETCH_DATA_SUCCESS]: fetchDataSuccess,
    [FETCH_DATA_FAILED]: fetchDataFailed,
  },
  { apartments: [] },
);
