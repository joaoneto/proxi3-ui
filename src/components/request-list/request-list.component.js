import React, { Component, Fragment } from 'react';

class RequestList extends Component {
  render() {
    const { requests } = this.props;
    if (!requests) return null;
    return <Fragment>
      {requests.map((request, key) => <div className="request" key={key}>
        <div className="request__method">{request.request.method}</div>
        <div className="request__url">{request.request.url}</div>
      </div>)}
    </Fragment>;
  }
}

export default RequestList;
