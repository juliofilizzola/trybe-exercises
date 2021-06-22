import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      idSave: ''
    }
    this.handlerSaveState = this.handlerSaveState.bind(this);
    this.handlerState = this.handlerState.bind(this);
  }
  handlerState({target}) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }
  handlerSaveState(value) {
    this.setState({
      id: '',
      idSave: value
    });
  }

  render() {
    const { id, idSave } = this.state;
    return (
      <div>
        <label htmlFor="ip">
          Email:
          <input id='ip' value={ id } type='text' name='id' onChange={ this.handlerState} />
        </label>
        <input
          type="button"
          value="Enviar"
          data-testid="id-send"
          onClick={ () => this.handlerSaveState(id) }
        />
        <input type="button" value="voltar" />
        <p>{ idSave }</p>
      </div>
    )
  }
}
