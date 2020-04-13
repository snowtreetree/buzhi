import React, { Component } from "react";
import HighOrderCompoent from "./highOrderComponent";
import { customContext } from "../utils/context";

import Home from "./home.js";

const Homes = HighOrderCompoent(Home);
class About extends Component {
  static contextType = customContext;
  render() {
    return (
      <div>
        <customContext.Consumer>
          {(value) => <div>Consumer{value}</div>}
        </customContext.Consumer>
        <Homes />
        about
        <img
          style={{ height: "100px", width: "100px" }}
          src={require("../assets/WechatIMG424.jpeg")}
          alt="测试"
        />
      </div>
    );
  }
}

export default About;
