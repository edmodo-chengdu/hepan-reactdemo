import asyncDemo from "../../constants/asyncDemo";
import {combineReducers} from "redux";

function fetchStatus(state = false, action) {
  switch (action.type) {
    case asyncDemo.SUCCESS_FETCH || asyncDemo.START_FETCH:
      return action.isFetch;
    default:
      return state;
  }
}

function dataList(data = [], action) {
  switch (action.type) {
    case asyncDemo.SUCCESS_FETCH:
      return action.data;
    default:
      return data;
  }
}

export default combineReducers({
  fetchStatus, dataList
})
