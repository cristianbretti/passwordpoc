import React, { Component } from 'react';
import Header from './App/Header'
import Body from './App/Body'
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
    	<Header/>
    	<Body/>
    </div>
    );
  }
}

export default App;
