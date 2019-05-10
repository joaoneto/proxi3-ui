import React, { Component } from 'react';

class Higlighter extends Component {
  componentDidMount() {
    window.hljs.configure({ useBR: false });
    window.hljs.highlightBlock(this.node);
  }

  render() {
    return <pre ref={(node) => this.node = node}>
      <code className="json">{this.props.children}</code>
    </pre>;
  }
}

export default Higlighter;
