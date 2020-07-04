import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./pages/Error";
import { Row, Col, Button, Menu } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routers from "./router";
import { ThemeContext, THEMETYPE, themes } from "./utils/context";

// class 重写

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: window.location.pathname
    };
  }
  componentDidMount() {
    this.setState({
      menu: window.location.pathname
    });
  }
  handleClick = (e) => {
    if (e.key === "github") {
      window.open("https://github.com/snowtreetree/buzhi");
      return;
    }
    this.setState({
      menu: e.key
    });
  };
  render() {
    return (
      <ThemeContext.Provider value={themes[THEMETYPE.LIGHT]}>
        <header id="header">
          <Row justify="space-between">
            <Col xs={4} sm={4} md={4} lg={4}>
              <h1 className="align-center">buZhi&</h1>
            </Col>
            <Col xs={16} sm={10} md={8} lg={6} xl={5}>
              <Router>
                <Menu
                  id="nav"
                  onClick={this.handleClick}
                  selectedKeys={this.state.menu}
                  mode="horizontal"
                >
                  <Menu.Item key="/home">
                    <Link to="/">首页</Link>
                  </Menu.Item>
                  <Menu.Item key="/about">
                    <Link to="/about">关于</Link>
                  </Menu.Item>
                  <Menu.Item key="github">
                    <GithubOutlined />
                    github
                  </Menu.Item>
                </Menu>
              </Router>
            </Col>
          </Row>
        </header>
        <div id="content">
          <ErrorBoundary>
            <Routers />
          </ErrorBoundary>
        </div>
        <footer>
          <div className="align-center">
            © 2020-2020 buzhifangxue.com 版权所有zxl
            <Button
              target="_blank"
              type="link"
              href="http://www.beian.miit.gov.cn/"
            >
              蜀ICP备20006050号
            </Button>
          </div>
        </footer>
      </ThemeContext.Provider>
    );
  }
}

export default App;
