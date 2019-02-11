import React, { Component } from 'react';

import './index.css';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div class='header'>
        <h1 class='title'>LitSearch</h1>
        <h2 class='description'>Search literature for analytical evidence with machine learning</h2>
      </div>

    );
  }
}

ReactDOM.render(<App >, docuemnt.getElementById('root'))
