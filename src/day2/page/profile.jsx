import React, { PureComponent } from "react";
import store from "../store/index";
class ProFile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        count: store.getState().conter,
      });
    });
  }
  render() {
    let { count } = this.state;
    return <div>{count}</div>;
  }
}

export default ProFile;
