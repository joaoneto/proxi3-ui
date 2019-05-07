import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

const Proxi3Context = React.createContext();

export default class Proxi3Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      inspectRequest: null
    };
    this.socket = socketIOClient('http://localhost:8080');
    this.handleMessage = this.handleMessage.bind(this);
    this.setInpectRequest = this.setInpectRequest.bind(this);
    this.unsetInpectRequest = this.unsetInpectRequest.bind(this);
  }

  handleMessage(request) {
    this.setState({ requests: [...this.state.requests, request] });
  }

  componentDidMount() {
    this.socket.on('proxi3:request', this.handleMessage);
  }

  componentWillUnmount() {
    this.socket.off('proxi3:request', this.handleMessage);
  }

  setInpectRequest(request) {
    this.setState({ inspectRequest: request });
  }

  unsetInpectRequest() {
    this.setState({ inspectRequest: null });
  }

  render() {
    return <Proxi3Context.Provider value={{
      ...this.state,
      setInpectRequest: this.setInpectRequest,
      unsetInpectRequest: this.unsetInpectRequest,
    }}>
      {this.props.children}
    </Proxi3Context.Provider>;
  }
}

export const withProxi3 = (Component) => (props) => <Proxi3Context.Consumer>
  {(context) => <Component {...context} {...props} />}
</Proxi3Context.Consumer>;
