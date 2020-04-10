import React from "react";
import { Button } from "antd";
const refButton = React.forwardRef((props, ref) => {
  const handleClick = () => {
    console.log(props);
  };
  return (
    <Button type="primary" ref={ref} onClick={handleClick}>
      ref
    </Button>
  );
});

export default refButton;
