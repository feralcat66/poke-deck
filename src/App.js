import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';
import Container from './pokelist.js';
import pokemon from './data.js'

class App extends Component {
render() {

  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
    this.setState({data: data.body})
  }

  const pokeNode = pokemon.map(pokemonObj => <Container pokemon={pokemonObj}/>);
  return (
  <ul className="pokeDeck">{pokeNode}</ul>
  )

}
}

export default App;
