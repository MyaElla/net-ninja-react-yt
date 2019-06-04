import React, { Component } from 'react';
import "./App.css";
import Child from './Child'
import AddHuman from "./AddHuman";

class App extends Component {
  state = {
    ninjas: [
      { name: "Jonas", age: 30, pet: "dog", id: 1 },
      { name: "Nick", age: 25, pet: "turtle", id: 2 },
      { name: "Zoe", age: 17, pet: "cat", id: 3 }
    ]
  };

  addHuman = human => {
    human.id = Math.random();

    let ninjasNew = [...this.state.ninjas, human];
    this.setState(
      {
        ninjas: ninjasNew
      },
      () => {
        console.log(this.state.ninjas);
      }
    );
  };

  deleteNinja = (id) => {
    console.log(id)
    let ninjasNewNew =this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjasNewNew
    })
  }

  render() {
    return (
      <div className="App">
        <h1>class React app</h1>
        <Child
          ninjas={this.state.ninjas}
          deleteNinja={this.deleteNinja}
        />
        <AddHuman addNinja={this.addHuman} />
      </div>
    );
  }
}

export default App;
