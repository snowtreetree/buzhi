import React, { useState, useEffect, useReducer, useCallback } from "react";
import { PageHeader, Select, Row, Col } from "antd";
import "../styles/mineClearance.css";
// import { getRandomFromArray } from "../utils/util";

const { Option } = Select;
const styles = {
  minebox: {
    textAlign: "center",
    display: "inline-block",
    lineHeight: "40px",
    cursor: "pointer"
  }
};

function MineClearance() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { value: state.value + 1 };
      case "dec":
        return { value: state.value - 1 };
      default:
        return { value: state.value + 1 };
    }
  };
  // easy , Medium, High
  const [level, setLevel] = useState("Easy");
  const [core, dispatch] = useReducer(reducer, { value: 1 });
  const [number] = useState({
    Easy: {
      mine: 10,
      height: 10,
      width: 8
    },
    Medium: {
      mine: 40,
      height: 14,
      width: 18
    },
    High: {
      mine: 99,
      height: 20,
      width: 24
    }
  });
  const length = {
    Easy: 40,
    Medium: 30,
    High: 25
  };
  const [heightAndWidth, setHeightAndWidth] = useState([length[level]]);
  const [params, setParams] = useState(number[level]);
  // const [test, setTest] = useState({ b: 1 });
  // const [test2, setTest2] = useState({ b: 1 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setParams(number[level]);
    setHeightAndWidth(length[level]);
    // 随机打点
    console.log(9999);
    setTimeout(() => {
      // alert(999);
      // console.log(88888);
    });
    setTimeout(() => {
      console.log(88888);
      // setTest({ b: 2 });
    }, 0);
    // setTimeout(() => {
    // setTest2(Object.assign(test, { b: 3 }));
    // }, 400);
    // console.log(
    //   getRandomFromArray(
    //     Array(number[level].width * number[level].height)
    //       .fill(1)
    //       .map((item, index) => index),
    //     number[level].mine
    //   ).sort((a, b) => a - b)
    // );
    // [length, level, number, params, setHeightAndWidth]
  });

  const memoizedCallback = useCallback(() => {
    return core;
  }, [core]);
  console.log("memoizedCallback", memoizedCallback());

  const handleChange = (value) => {
    setLevel(value);
  };

  const handleMinceClick = (ind, index) => {
    dispatch({ type: ind % 2 ? "add" : "dec" });
    console.log(index, ind);
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
        <Col span={6} style={{ textAlign: "center" }}>
          分数：{core.value}
          {test.b}
        </Col>
      </Row>
      <div style={{ margin: "20px" }}>
        {Array(params.height)
          .fill(1)
          .map((item, index) => (
            <Row justify="center" key={index}>
              {Array(params.width)
                .fill(1)
                .map((item, ind) => (
                  <div
                    style={{
                      ...styles.minebox,
                      height: heightAndWidth + "px",
                      width: heightAndWidth + "px",
                      lineHeight: heightAndWidth + "px"
                    }}
                    className={`${
                      (index % 2 && ind % 2) || (!(index % 2) && !(ind % 2))
                        ? "odd"
                        : "even"
                    } `}
                    flex="1"
                    key={ind}
                    onClick={() => handleMinceClick(ind, index)}
                  ></div>
                ))}
            </Row>
          ))}
        <Col span={6}></Col>
      </div>
    </div>
  );
}

export default MineClearance;
