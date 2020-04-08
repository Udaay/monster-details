import React, { Component } from 'react';
import './App.css';
import { CardList }  from './component/CardList/CardList.component'
import { SearchBox } from './component/SearchBox/Search.component'

class App extends Component{
  constructor() {
    super();
    this.state = {
     monsters : [],
     searchKey: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( {
      monsters : users
    } ));
  }


  render() {
    const { monsters, searchKey } = this.state;
    const filterMonster =  monsters.filter( monster => monster.name.toLowerCase().includes(searchKey.toLowerCase()) );
    return (
      <React.Fragment>
        <h1> Monster Rolodex </h1>
        <SearchBox 
          handleChange = {e => this.setState( {searchKey: e.target.value})}
          placeholder = 'search-monsters'
         />
    
        <CardList 
          monsters = {filterMonster}
        />
      </React.Fragment>
    );
  }
}

export default App;
