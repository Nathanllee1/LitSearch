import React, { Component } from 'react';
import './index.css';
import ReactDOM from 'react-dom';

import Titles from "./title";
import Editor from "./editor";

class App extends React.Component {
  render() {
    return (
      <Titles />
      <Editor />
    );
  }
}

export default App;
