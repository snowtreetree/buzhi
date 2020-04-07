import React, { useState } from "react";
import { PageHeader, Select, Row, Col } from "antd";
const { Option } = Select;

function MineClearance() {
  // easy , Medium, High
  const [level, setLevel] = useState("Easy");
  const [number] = useState({
    Easy: {
      mine: 10,
      high: 10,
      width: 8
    },
    Medium: {
      mine: 40,
      high: 14,
      width: 18
    },
    High: {
      mine: 99,
      high: 20,
      width: 24
    }
  });

  const handleChange = value => {
    setLevel(value);
  };

  return (
    <div>
      <PageHeader title="扫雷" />
      <Row justify="space-around">
        <Col span={6}>
          等级：
          <Select
            defaultValue={level}
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="Easy">初级</Option>
            <Option value="Medium">中级</Option>
            <Option value="High">高级</Option>
          </Select>
        </Col>
        {/* <Col span={6} style={{textAlign:'center'}}>分数：</Col> */}

        {/* <Col span={6}></Col> */}
      </Row>
    </div>
  );
}

export default MineClearance;
