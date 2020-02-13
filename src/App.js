import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';
import pokemon from './data.js'
import Deck from './Deck.js'
import Header from './Header.js'


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
    </main>
  )

}
}

export default App;
