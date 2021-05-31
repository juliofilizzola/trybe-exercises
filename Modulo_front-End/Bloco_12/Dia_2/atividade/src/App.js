import React from 'react';
import Combo from './Component/Combo';
import Input from './Component/Input';
import States from './States';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      nome: '',
      endereco: '',
      cpf: '',
      city: '',
      estado: '',
      type: '',
      email: '',
      counterMouserEnter: false,
    }

    this.changeState = this.changeState.bind(this);
  }

  handleMouseEnter() {
  if(this.state.counterMouserEnter === false) {
    alert('Preencha isso, seu arrombado!')
  }
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>
            Seus Dados:
          </legend>
          <Input/>
          <Combo state={ States }/>
        </fieldset>
  
  
      </form>
    );
  }

}

export default App;
