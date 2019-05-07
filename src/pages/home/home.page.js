import React, { Component, Fragment } from 'react';
import { RequestList, RequestDetails, withProxi3 } from '../../components';
import './home.styles.css';

export default withProxi3(class extends Component {
  constructor(props) {
    super(props);
    this.openRequestDetails = this.openRequestDetails.bind(this);
  }

  openRequestDetails(request) {
    console.log(request);
    this.props.setInpectRequest(request);
  }

  render() {
    return <Fragment>
      <RequestList requests={this.props.requests} onRequestClick={this.openRequestDetails} />
      {this.props.inspectRequest && <RequestDetails request={this.props.inspectRequest} />}
    </Fragment>;
  }
})
