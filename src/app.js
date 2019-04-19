import React, { Component } from 'react';
import { Proxi3Provider } from './components';
import Pages from './pages';

import './app.styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Proxi3Provider>
          <Pages />
        </Proxi3Provider>
      </div>
    );
  }
}

export default App;
