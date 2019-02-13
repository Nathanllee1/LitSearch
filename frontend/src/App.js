import React from 'react';
import './index.css';

import Titles from "./title";
import Editor from "./editor";
import Card from "./cards";

class App extends React.Component {
  render() {
    return (
      <div id='header'>
        <Titles />
        <Editor />
        <Card />
      </div>
    );
  }
}

export default App;
