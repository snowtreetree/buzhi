import React, { Component } from "react";
// import HighOrderCompoent from "./highOrderComponent";
import { customContext } from "../utils/context";
import Menu, { SubMenu, Item as MenuItem } from "rc-menu";

// import Home from "./home.js";

// const Homes = HighOrderCompoent(Home);
class About extends Component {
  static contextType = customContext;
  render() {
    return (
      <div>
        <Menu onClick={this.onClick} mode="inline">
          <SubMenu key="1" title="submenu1">
            <MenuItem key="1-1">item1-1</MenuItem>
            <MenuItem key="1-2">item1-2</MenuItem>
          </SubMenu>
          <SubMenu key="2" title="submenu2">
            <MenuItem key="2-1">item2-1</MenuItem>
            <MenuItem key="2-2">item2-2</MenuItem>
            <SubMenu key="2-3" title="submenu2-3">
              <MenuItem key="2-3-1">item2-3-1</MenuItem>
              <MenuItem key="2-3-2">item2-3-2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem key="3">item3</MenuItem>
        </Menu>
        {/* <customContext.Consumer>
          {(value) => <div>Consumer{value}</div>}
        </customContext.Consumer>
        <Homes />
        about
        <img
          style={{ height: "100px", width: "100px" }}
          src={require("../assets/WechatIMG424.jpeg")}
          alt="测试"
        /> */}
      </div>
    );
  }
}

export default About;
