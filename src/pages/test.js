import React, { Component } from "react";
import Use from "./use";
import { Button } from "antd";
import RefButton from "../components/refButton";
import hoc from "../components/hoc";
import PropTypes from "prop-types";

class WrappedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{this.props.author}</div>;
  }
}

const HocWrappedComponent = hoc(WrappedComponent);

console.log(HocWrappedComponent);

const ref = React.createRef();
function About(params) {
  const showRef = () => {
    console.log(ref.current.handleClick());
  };
  return (
    <div>
      Test
      <Use></Use>
      <Button type="primary" onClick={showRef}>
        ref
      </Button>
      <RefButton name="ref" ref={ref} />
      <HocWrappedComponent />
    </div>
  );
}

WrappedComponent.propTypes = {
  author: PropTypes.string
};

export default About;
