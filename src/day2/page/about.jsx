import React, { PureComponent } from "react";
import { connect } from "react-redux";

class Abuot extends PureComponent {
  render() {
    let { count } = this.props;
    function addNumber(number) {
      console.log(number);
      // dispatch({ type: "ADD" });
    }
    return (
      <div>
        {count}
        <button
          onClick={() => {
            addNumber(+1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            addNumber(-1);
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.conter,
  };
}
// 第一个参数是state，可以映射到props里面，第二个参数是dispatch
export default connect(mapStateToProps)(Abuot);
