import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import NavBar from './components/nav/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/profile' component={Profile}/>
        </ Switch>
      </div>
    );
  }
}

export default App;
