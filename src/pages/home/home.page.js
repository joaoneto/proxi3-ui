import React, { Component } from 'react';
import { RequestList, RequestDetails, withProxi3 } from '../../components';
import './home.styles.css';

export default withProxi3(class extends Component {
  constructor(props) {
    super(props);
    this.openRequestDetails = this.openRequestDetails.bind(this);
  }

  openRequestDetails(request) {
    this.props.setInpectRequest(request);
  }

  render() {
    return <div className="home">
      <RequestList requests={this.props.requests} onRequestClick={this.openRequestDetails} />
      <RequestDetails request={this.props.inspectRequest} />
    </div>;
  }
})
