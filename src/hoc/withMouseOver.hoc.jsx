import React, { Component } from 'react';

// HOC that would add mouseOver & mouseOut events to the component
const withMouseOver = (WrappedComponent) => {
  return class extends Component {
    state = {
      isHover: false,
    };

    setHoverOn = () => {
      this.setState({ isHover: true });
    };

    setHoverOff = () => {
      this.setState({ isHover: false });
    };

    render() {
      return (
        <div onMouseOver={() => this.setHoverOn()} onMouseOut={() => this.setHoverOff()}>
          <WrappedComponent isHover={this.state.isHover} {...this.props} />
        </div>
      );
    }
  };
};

export default withMouseOver;
