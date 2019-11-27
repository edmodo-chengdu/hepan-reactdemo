import React from "react"
import {fetchData} from "../../store/async_demo/actions";
import {connect} from "react-redux";
import {Button} from "antd";


class AsyncDemo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>
      <Button onClick={() => {
        this.props.getData();
      }}>
        getData
      </Button>
      {this.props.dataList.map(val => {
        return <p key={val.id}>
          {val.name}:{val.price}
        </p>
      })}
    </div>
  }
}

function mapStateToProps(state) {
  return state.asyncDemo;
}

function mapDispatchToProps(dispatch) {
  return {
    "getData": () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncDemo)
