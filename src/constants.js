import { ActionType, createActionTypes } from 'action-types';

export const actionTypes = createActionTypes({
  FETCH_DATA_REQUEST: ActionType,
  FETCH_DATA_SUCCESS: ActionType,
  FETCH_DATA_FAILED: ActionType,
});
