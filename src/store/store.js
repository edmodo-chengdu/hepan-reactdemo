import {applyMiddleware, combineReducers, createStore} from "redux";
import todoApp from "./redux_demo/reducers";
import asyncDemo from "./async_demo/reducers";
import ReduxThunk from 'redux-thunk'

let rootReducer = combineReducers({todoApp, asyncDemo});
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);
export default store;
