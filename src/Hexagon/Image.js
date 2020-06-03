import React, { Component } from "react";
import PropTypes from "prop-types";

class Image extends Component {
  static propTypes = {
    children: PropTypes.string,
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string
  };

  render() {
    const { children, x, y, className } = this.props;
    return (
      <image
        href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"
        x={x}
        y={y}
        height="5"
        width="5"
        className={className}
      />
    );
  }
}

export default Image;
