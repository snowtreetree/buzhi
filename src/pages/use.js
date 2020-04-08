import React, { useContext, useReducer } from "react";
import { ThemeContext } from "../utils/context";
import { Button } from "antd";

const initState = {
  count: 2,
};

function reducer(state, action) {
  console.log(initState);
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count + 1 };
    default:
      return { ...state };
  }
}

function Use() {
  const [state, dispatch] = useReducer(reducer, initState);
  const theme = useContext(ThemeContext);
  return (
    <>
      2{/* <div>{this.context}</div> */}
      {theme}
      {state.count}
      <Button onClick={() => dispatch({ type: "increment" })}>add</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>decrement</Button>
    </>
  );
}

export default Use;
