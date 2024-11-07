import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import WorldBetter from "./text";

class banner extends Component {
  chAddConter = () => {
    this.props.addConter();
    this.getRef = createRef();
  };
  render() {
    const { banner, conter } = this.props;

    return (
      <div>
        {banner.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.title}</h3>
            </div>
          );
        })}
        <div>{conter}</div>
        <button onClick={() => this.chAddConter()}>+1</button>
        <WorldBetter ref={this.getRef}></WorldBetter>
      </div>
    );
  }
}

banner.propTypes = {
  banner: PropTypes.array.isRequired,
};

banner.defaultProps = {
  banner: [
    {
      title: "banner1",
    },
    {
      title: "banner2",
    },
    {
      title: "banner3",
    },
  ],
};
export default banner;
