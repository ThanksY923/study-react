import React, { Component, createRef } from "react";
import Banners from "./banner";
import axios from "axios";
import Helo from "./text";
import { Container } from "./style";
import _ from "classnames";

class day1Study extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      conter: 0,
      list: ["流行", "新款", "精选"],
      isShow: true,
    };
    this.getRef = createRef();
  }
  componentDidMount() {
    axios.get(" http://123.207.32.32:8000/home/multidata").then((res) => {
      this.setState({
        banners: res.data.data.banner.list,
      });
    });
  }
  changeActiveConter(index) {
    this.setState({
      conter: index,
    });
  }
  render() {
    const { banners, conter, list, isShow } = this.state;
    let addConter = () => {
      this.setState({
        conter: conter + 1,
      });
    };
    return (
      <div>
        day1Study
        <Banners
          banner={banners}
          conter={conter}
          addConter={addConter}
        ></Banners>
        {conter}
        <div className="test-container">
          {list.map((item, index) => {
            return (
              <div
                className={"test" + (index === conter ? " active" : "")}
                onClick={() => {
                  this.changeActiveConter(index);
                }}
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
        <Helo ref={this.getRef}></Helo>
        <button
          onClick={() => {
            console.log(this.getRef.current);
          }}
        >
          获取dom对象
        </button>
        <Container>
          <div className="box">2222</div>
          <div className={_("ASD", { "is-add": isShow })}></div>
        </Container>
      </div>
    );
  }
}

export default day1Study;
