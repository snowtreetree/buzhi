import React from "react";

function HighOrderComponent(Component) {
  console.log(9999);
  class HOC extends React.Component {
    componentDidUpdate(a, b) {
      console.log(a, b, 2);
    }
    render() {
      // eslint-disable-next-line react/prop-types
      const { forwardRef, ...rest } = this.props;
      return <Component ref={forwardRef} {...rest}></Component>;
    }
  }

  //   return <HOC></HOC>;

  return React.forwardRef((props, ref) => {
    return <HOC {...props} forwardRef={ref}></HOC>;
  });
}

export default HighOrderComponent;
