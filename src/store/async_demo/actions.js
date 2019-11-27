import asyncDemo from "../../constants/asyncDemo";
import axios from "axios";
import {asyncDemoUrl} from "../../constants/requestUrl";

function startFetch() {
  return {
    type: asyncDemo.START_FETCH,
    isFetch: true
  }
}

function successFetch(data) {
  return {
    type: asyncDemo.SUCCESS_FETCH,
    isFetch: false,
    data,
  }
}

//当 action 创建函数返回函数时，这个函数会被 Redux Thunk middleware 执行
function fetchData() {
  return function (dispatch, getState) {
    console.log(getState());
    dispatch(startFetch());
    axios.get(asyncDemoUrl.getData).then(({data}) => {
      dispatch(successFetch(data));
    })
  }
}

export {startFetch, successFetch, fetchData}
