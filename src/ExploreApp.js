import React, { Component } from 'react';
import { getPokemon } from './get-pokemon.js';
import Header from './Header.js';
import Deck from './Deck.js';
import Paging from './Paging.js';
import SearchOptions from './SearchOptions.js'


export default class HomeApp extends Component {
    state = { pokemon: [] };

    async loadPokemon() {
        const response = await getPokemon();
        const pokemon = response.results;
        const totalResults = response.count;
        this.setState({
            pokemon: pokemon,
            totalResults: totalResults,
        });
    }

    async componentDidMount() {
        await this.loadPokemon();

        window.addEventListener("hashchange", async () => {
            console.log("change");
            await this.loadPokemon();
        });
    }

    render() {
        const { pokemon, totalResults } = this.state;

        return(
            <div>
                <Header />
                <main>
                    <section className='options-section'>
                        <SearchOptions />
                    </section>
                    <section className="list-section">
                    <Deck array={pokemon}/>
                    <Paging totalResults={totalResults} />
                    </section>
                </main>
            </div>
        )
    }
}