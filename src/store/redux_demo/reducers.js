import ReduxDemo from "../../constants/reduxDemo"
import {combineReducers} from "redux";

const {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, SHOW_ALL} = ReduxDemo;

function visibilityFilter(state = SHOW_ALL, action) {

  switch (action.type) {
      case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          index : action.index
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      });
    default:
      return state
  }
}

export default combineReducers({visibilityFilter, todos});
