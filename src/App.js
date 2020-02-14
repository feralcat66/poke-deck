import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';
import Deck from './Deck.js'
import Header from './Header.js'
import ExploreApp from './ExploreApp.js' 


class App extends Component {
 
 render() {

 
      return (
       <div>

         <ExploreApp />
       </div>
  )

}
}

export default App;
