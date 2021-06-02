import React, { Component } from 'react'

export default class DataJoke extends Component {
  constructor() {
    super();
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }

  fetchJoke = async () => {
    const requestHeaders = { headers: { Accept: 'application/json' } };
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
    const requestObject = await requestReturn.json();

    this.setState({
      jokeObj: requestObject,
    });
  }

  componentDidMount = () => {

  }

  saveJoke = () => {

    this.fetchJoke();
  }

  renderJokeElement = () => {
    return (
      <div>
        <p>{this.setState.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>Salvar Piada!</button>
      </div>
    );
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return(
      <div>
        <span>{storedJokes.map(({ id, joke }) => (<p key={ id } > {joke} </p>))}</span>
        <span> Renderização condiciional </span>
      </div>
    )
  }
}
