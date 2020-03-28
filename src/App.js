import React,{useState} from 'react';
import './App.css';
import { Row, Col,Button,Menu } from 'antd';
import {GithubOutlined} from '@ant-design/icons'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about'

import {ThemeContext} from './utils/context'

function App() {
  const [menu,setMenu] = useState(window.location.pathname)
  const handleClick = (e) => {
    if(e.key === 'github') {
      window.open('https://github.com/snowtreetree/buzhi')
      return
    }
    setMenu(e.key)
  }
  return (
    <div>
      <ThemeContext.Provider value={menu}>
      <Router>
      <header id="header">
      <Row justify="space-between">
      <Col xs={4} sm={4} md={4} lg={4}>
      <h1 className="align-center">buZhi&</h1>
      </Col>
      <Col xs={16} sm={10} md={8} lg={6} xl={5} >
      <Menu id="nav" onClick={handleClick} selectedKeys={[menu]} mode="horizontal">
        <Menu.Item key="/home">
        <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">关于</Link>
        </Menu.Item>
        <Menu.Item key="github">
        <GithubOutlined />github
        </Menu.Item>
        </Menu>
      </Col>
      </Row>
      </header>
      <div id="content">
        <Switch>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <footer>
        <div className="align-center">
        © 2020-2020 buzhifangxue.com 版权所有<Button target="_blank" type="link" href="http://www.beian.miit.gov.cn/">蜀ICP备20006050号</Button>
        </div>
        </footer>
      </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
