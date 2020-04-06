import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
     monsters : [
       {
        name : "Goku",
        id: "r1c1"
       },
       {
        name : "Vegeta",
        id : "r1c2"
       },
       {
        name : "Gohan",
        id: "r1c3"
       },
     ]
    }
  }

  render() {
    return (
      <div className="root" >
        { this.state.monsters.map(ele => ( <h1 key={ele.id} > {ele.name }</h1> )
       )}
      </div>
    );
  }
}
export default App;
