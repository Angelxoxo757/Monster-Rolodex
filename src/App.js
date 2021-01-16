import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();


    this.state = {
      monsters: [
        {
          name: 'Tombcrackle',
          id: 'awe12'
        },
        {
          name: 'The Insane Charmer',
          id: 'frf22'
        },
        {
          name: 'The Grim Ash Viper',
          id: 'fsr32'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster =>
            <h1 key={monster.id}> {monster.name} </h1>
          )}
      </div>
    );
  }
}

export default App;
