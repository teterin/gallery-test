import { createAction } from 'redux-actions';
import { actionTypes } from './constants';

const {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
} = actionTypes;

export const fetchDataRequest = createAction(FETCH_DATA_REQUEST);
export const fetchDataSuccess = createAction(FETCH_DATA_SUCCESS);
export const fetchDataFailed = createAction(FETCH_DATA_FAILED);
