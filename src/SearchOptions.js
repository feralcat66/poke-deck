import React, { Component } from 'react';

export default class SearchOptions extends Component {
    componentDidMount() {
      this.updateControls();
  
      window.addEventListener("hashchange", () => {
        this.updateControls();
      });
    }
  
    state = {
      checkedRadio: [{ name: "pokemon" }, { name: "speed" }, { name: "type" }],
      searchInput: ""
    };
  
    updateControls() {
      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);
      const type = searchParams.get("type");
  
      this.setState({
        searchInput: searchParams.get("s") || "",
        checkedRadio: type
      });
    }
  
    handleSubmit = event => {
      const form = document.querySelector("form");
      event.preventDefault();
      const formData = new FormData(form);
  
      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);
  
      searchParams.set("type", formData.get("type"));
      searchParams.set("s", formData.get("search"));
      //reset to page 1 as this is new search and
      //we don't know how many pages
      searchParams.set("page", 1);
  
      window.location.hash = searchParams.toString();
    };
  
    render() {
      return (
        <form className="options" onSubmit={this.handleSubmit}>
          <label forhtml="search">Search:</label>
          <p>
            <input
              id="search"
              name="search"
              onChange={e => this.setState({ searchInput: e.target.value })}
              value={this.state.searchInput}
            />
          </p>
  
          <fieldset className="type">
            <label>
              <input
                type="radio"
                name="type"
                value="pokemon"
                onClick={() => this.setState({ checkedRadio: "pokemon" })}
                checked={this.state.checkedRadio === "pokemon"}
              />
              Pokemon
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="speed"
                onClick={() => this.setState({ checkedRadio: "speed" })}
                checked={this.state.checkedRadio === "speed"}
              />
              Speed
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="type"
                onClick={() => this.setState({ checkedRadio: "type" })}
                checked={this.state.checkedRadio === "type"}
              />
              Type
            </label>
          </fieldset>
  
          <p>
            <button>Search 🔍</button>
          </p>
        </form>
      );
    }
  }