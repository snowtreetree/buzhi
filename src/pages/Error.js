import React, { Component } from "react";
import PropTypes from "prop-types";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(err) {
    console.log(err);
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    const {
      state: { hasError },
      props
    } = this;
    return hasError ? <div>Something went wrong.</div> : props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element
};

export default ErrorBoundary;
