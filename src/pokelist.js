import React, { Component } from 'react';

export default class Container extends Component {
    render() {
        return <li>
            <div className="title-container">
                <h2>{this.props.pokemon.pokemon}</h2>
                <p className="type-container">Type: {this.props.pokemon.type_1}</p>
                <p className="speed-container">Speed: {this.props.pokemon.speed}</p>
    <p className="hp-container">hp: {this.props.pokemon.hp}</p>
            </div>
        <div className="image-container">
            <img
            alt={this.props.pokemon.url_image}
            src={this.props.pokemon.url_image} />
        </div>
        </li>
    }
}