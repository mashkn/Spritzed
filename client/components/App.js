import React, { Component } from 'react';


let gameStore = [];

function getInitialState() {
  return {
    
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  render() {

    return (
      <div>
        <p>Hello world!</p>
      </div>
    );
  }
}

export default App;