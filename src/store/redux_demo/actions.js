import ActionTypes from "../../constants/reduxDemo"

const {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} = ActionTypes;

let index = 0;

function addTodo(text) {
  return {type: ADD_TODO, text, 'index': index++}
}

function toggleTodo(index) {
  return {type: TOGGLE_TODO, index}
}

function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}

export {addTodo, toggleTodo, setVisibilityFilter};
