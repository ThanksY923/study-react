import React, { PureComponent } from "react";
import ProFile from "./profile";
import About from "./about";
import store from "../store/index";

export default class home extends PureComponent {
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
    function createDispatch(value) {
      return { type: "ADD", value };
    }
    return (
      <div>
        {count}
        <button onClick={() => store.dispatch(createDispatch(20))}>加20</button>
        <button onClick={() => store.dispatch(createDispatch(-20))}>
          减20
        </button>
        <ProFile></ProFile>
        <About></About>
      </div>
    );
  }
}
