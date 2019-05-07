import React, { Component } from 'react';
import './request-details.styles.css';

class RequestDetails extends Component {
  render() {
    return <div className="request-details">
      <p>Details</p>
      {JSON.stringify(this.props.request)}
    </div>;
  }
}

export default RequestDetails;
