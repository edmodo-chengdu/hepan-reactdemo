import React from "react"
import {Button, Input} from "antd";
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import * as redux_demo from "../../store/redux_demo/actions";

class ReduxDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      show: false
    };
  }

  handleChane(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleADD(text) {
    this.props.redux_demos.addTodo(text);
    this.setState({
      text: ""
    })
    ;
  }

  handleToggle() {
    this.setState((state) => {
      return {
        show: !state.show
      }
    })
  }

  handleTodo(index) {
    this.props.redux_demos.toggleTodo(index);
  }

  render() {
    const text = this.state.text;
    return (
      <div>
        <Input value={text} onChange={(e) => {
          this.handleChane(e)
        }}/>
        <Button onClick={() => {
          this.handleADD(text)
        }}>addTodo</Button>
        <Button onClick={() => this.handleToggle()}>{this.state.show ? "undo" : "complete"}</Button>
        <ul>
          {this.props.todos.map(todo => {
            return this.state.show === todo.completed ?
              <Button key={todo.index} onClick={() => this.handleTodo(todo.index)}>{todo.text}</Button> : null
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.todoApp;
}

function mapDispatchToProps(dispatch) {
  return {
    "redux_demos": bindActionCreators(redux_demo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)
