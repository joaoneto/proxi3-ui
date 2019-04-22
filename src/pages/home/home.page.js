import React, { Component, Fragment } from 'react';
import { RequestList, withProxi3 } from '../../components';
import './home.styles.css';

export default withProxi3(class extends Component {
  render() {
    return <Fragment>
      <RequestList requests={this.props.requests} />
    </Fragment>;
  }
})
