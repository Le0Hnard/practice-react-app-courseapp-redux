import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const successString = "_SUCCESS";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - successString.length) === successString;
}

export default function apiCallStatusReducer(state = initialState.apiCallsInProgress, action) {
  if(action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if(action.type === types.API_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}