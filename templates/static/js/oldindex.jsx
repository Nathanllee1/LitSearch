import React from 'react';
import './index.css';

import Titles from "./title";
import Editor from "./editor";
import Card from "./cards";
//import FilteredList from "./filteredList"


class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <Editor />
        <Card />
      </div>
    )
  };
}

export default App()
