import React, { Component } from 'react';
import Child from './Child'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Jonas', age: 30, pet: 'dog', id: 1 },
      { name: 'Nick', age: 25, pet: 'turtle', id: 2 },
      { name: 'Zoe', age: 17, pet: 'cat', id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>class React app</h1>
        <Child ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
