import React, { Component } from "react";

function Hoc(WrappedComponent) {
  return class H extends Component {
    constructor(props) {
      super(props);
      this.state = {
        author: "snow"
      };
    }
    render() {
      return (
        <WrappedComponent {...this.props} {...this.state}></WrappedComponent>
      );
    }
  };
}

export default Hoc;
