import React, { PureComponent } from 'react';

class Highlighter extends PureComponent {
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

export default Highlighter;
