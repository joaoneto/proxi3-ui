import React, { Component } from 'react';
import './request-list.styles.css';

class RequestList extends Component {
  render() {
    const { requests } = this.props;
    if (!requests) return null;
    return <div className="request-list">
      {requests.map((request, key) => <div className="request" key={key}>
        <div className="request__date">{request.request.date}</div>
        <div className="request__method">{request.request.method}</div>
        <div className="request__url">{request.request.url}</div>
      </div>)}
    </div>;
  }
}

export default RequestList;
