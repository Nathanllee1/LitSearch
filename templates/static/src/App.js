import React from 'react';
import './index.css';

import Titles from "./title";
import Editor from "./editor";
import Card from "./cards";
import FilteredList from "./filteredList"


class App extends React.Component {
  render() {
    return (

      <div id='content'>
        <Titles />
        <div class='main-content'>
          <Editor />
          <div class='sidebar'>
            <Card />
          </div>

        </div>

      </div>
    );
  }
}

export default App;
