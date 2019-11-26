import {createStore} from "redux";
import todoApp from "./redux_demo/reducers";

const store = createStore(todoApp);
export default store;
