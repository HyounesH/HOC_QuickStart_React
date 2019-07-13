import React from "react";

const WithLike = WrappedComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    increment = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 };
      });
     
    };
    render() {
      const { count } = this.state;
      console.log(count);
      return <WrappedComponent count={count} increment={this.increment} />;
    }
  }
  return NewComponent;
};

export default WithLike;
