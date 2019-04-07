import React, { PureComponent } from "react";


class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.imageSource = this.props.imageSource;
  }

  render() {
    return (
        <div><span>{this.imageSource}</span></div>
    );
  }
}
export default Image;
