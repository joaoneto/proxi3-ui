import React, { Component, Fragment } from 'react';
import { RequestList } from '../../components';
import './home.styles.css';

export default class extends Component {
  render() {
    return <Fragment>
      <RequestList />
    </Fragment>;
  }
};
