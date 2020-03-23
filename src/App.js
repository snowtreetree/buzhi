import React from 'react';
import './App.css';
import { Row, Col,Button } from 'antd';



Function.prototype.bindCus = function bindCus(context) {
  const self = this;
  const arg1 = Array.prototype.slice(arguments,1)
  return function(){
    return self.apply(context,arg1.concat(Array.prototype.slice(arguments,1)))
  }
}

function testBind(name,age) {
  console.log(name,age)
  console.log(this.name)
}

const obj = {name:'zxl'}

const fun = testBind.bind(obj,'name')

fun(18)


function App() {
  return (
    <div>
      <header id="header">
      <Row>
      <Col span={6}>
      <h1 className="align-center" span={6}>buZhi&</h1>
      </Col>
      <Col span={18}>
        </Col>
      </Row>
      </header>
      <div id="content"></div>
      <footer>
        <div className="align-center">
        © 2020-2020 buzhifangxue.com 版权所有<Button target="_blank" type="link" href="http://www.beian.miit.gov.cn/">蜀ICP备20006050号</Button>
        </div></footer>
    </div>
  );
}

export default App;
