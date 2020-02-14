import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';
import Deck from './Deck.js'
import Header from './Header.js'
import ExploreApp from './ExploreApp.js' 


class App extends Component {

state = { 
  data: []
}


  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
    console.log(data.body)
    this.setState({data: data.body.results})
 }  
 
 render() {

 
      return (
        <main>
          <Header />

      <Deck array={this.state.data}/>
      <ExploreApp />
    </main>
  )

}
}

export default App;
