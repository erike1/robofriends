// import logo from './logo.svg';
import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SeacrhBox'

import './App.css';
// import { render } from '@testing-library/react';
const state = {
  robots: robots,
  searchfield: ''
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    // const filteredRobots = this.state.robots.filter(robot => {
    //   return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    // })
    // console.log(filteredRobots);
  };

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>,
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
