import React, { Component } from 'react';
import './request-list.styles.css';

class RequestList extends Component {
  constructor(props) {
    super(props);
    this.handleRequestClick = this.handleRequestClick.bind(this);
  }

  handleRequestClick(request) {
    this.props.onRequestClick && this.props.onRequestClick(request);
  }

  render() {
    const { requests } = this.props;
    if (!requests) return null;
    return <div className="request-list">
      {requests.map((request, key) => <div className="request" key={key} onClick={() => this.handleRequestClick(request)}>
        <div className="request__date">{request.request.date}</div>
        <div className="request__method">{request.request.method}</div>
        <div className="request__url">{request.request.url}</div>
      </div>)}
    </div>;
  }
}

export default RequestList;
