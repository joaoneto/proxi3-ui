import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

const Proxi3Context = React.createContext();

export const Proxi3Consumer = Proxi3Context.Consumer;

export default class Proxi3Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
    this.socket = socketIOClient('http://localhost:8080');
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage(request) {
    this.setState({ requests: [...this.state.requests, request] });
  }

  componentDidMount() {
    console.log('on proxi3:request');
    this.socket.on('proxi3:request', this.handleMessage);
  }

  componentWillUnmount() {
    console.log('off proxi3:request');
    this.socket.off('proxi3:request', this.handleMessage);
  }

  render() {
    return <Proxi3Context.Provider value={this.state}>
      {this.props.children}
    </Proxi3Context.Provider>;
  }
}

export const withSocket = (Component) => (props) => <Proxi3Consumer>
  {(context) => <Component {...context} {...props} />}
</Proxi3Consumer>;
