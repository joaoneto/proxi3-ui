import React, { Component } from 'react';

class Resizer extends Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.stopResizing = this.stopResizing.bind(this);
  }

  handleMouseDown(e) {
    this.startResizing();
  }

  updatePosition(e) {
    e.preventDefault();
    const element = this.props.risizeElementRef.current;
    this.props.onResize && this.props.onResize(element.getBoundingClientRect().right - e.pageX);
  }

  startResizing() {
    window.addEventListener('mousemove', this.updatePosition, false);
    window.addEventListener('mouseup', this.stopResizing, false);
  }

  stopResizing() {
    window.removeEventListener('mousemove', this.updatePosition, false);
    window.removeEventListener('mouseup', this.stopResizing, false);
  }

  render() {
    return <div className={this.props.className} onMouseDown={this.handleMouseDown}>
      {this.props.children}
    </div>;
  }
}

export default Resizer;
