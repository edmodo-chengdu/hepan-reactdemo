import React from "react"
import pageUrl from "../../constants/pageUrl";
import {Button} from "antd";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  getUrlList() {
    let list = [];
    for (let key in pageUrl) {
      list.push(pageUrl[key].slice(1))
    }
    return list;
  }

  handleBtn(url) {
    window.location.href = url;
  }

  render() {
    return <div>
      {this.getUrlList().map(url =>
        <Button key={url} onClick={() => {
          this.handleBtn(url)
        }}>{url}</Button>
      )}
    </div>
  }
}

export default Home
