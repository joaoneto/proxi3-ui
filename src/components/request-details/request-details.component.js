import React, { Component } from 'react';
import './request-details.styles.css';

class RequestDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.elementRef = React.createRef();

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  isCloseToResizeArea(e) {
    if (e.movementX > )
  }

  handleMouseDown(e) {
    console.log('mouse down', e);
  }

  handleMouseUp(e) {
    console.log('mouse up', e);
  }

  render() {
    const { width } = this.state;
    return <div className="request-details" style={{ width: width }} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
      <p>Details</p>
      {JSON.stringify(this.props.request)}
    </div>;
  }
}

export default RequestDetails;
