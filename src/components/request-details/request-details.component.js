import React, { Component } from 'react';
import { Resizer } from '../resizer';
import Highlight from 'react-highlight';
import './request-details.styles.css';

class RequestDetails extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
    this.state = {};
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(width) {
    this.setState({ width: width + 'px' });
  }

  render() {
    if (!this.props.request) return null;
    const { width } = this.state;
    return <div className="request-details">
      <div ref={this.node} className="request-details__wrap" style={{ width: width }}>
        <Resizer
          className="request-details__drag-area"
          risizeElementRef={this.node}
          onResize={this.handleResize}
        />
        <div className="request-details__content">
          <h4>Request Payload</h4>
          <Highlight>
            {JSON.stringify(this.props.request.request, null, 2)}
          </Highlight>
          <h4>Response Payload</h4>
          <Highlight>
            {JSON.stringify(this.props.request.response, null, 2)}
          </Highlight>
        </div>
      </div>
    </div>;
  }
}

export default RequestDetails;
