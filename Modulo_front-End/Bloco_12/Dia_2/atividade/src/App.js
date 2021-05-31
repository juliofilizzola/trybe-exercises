import React from 'react';
import Combo from './Component/Combo';
import Input from './Component/Input';
import TextArea from './Component/TextArea';
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
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter() {
    if(this.state.counterMouserEnter === false) {
      alert('Preencha isso, seu arrombado!')
      this.setState({
        counterMouserEnter: true,
      })
    }
  }

  changeState({target}) {
    let {name, value} = target;
    if(this.setState.name === "name") {
      value = value.toUppercase;
    }

    this.setState({
      [name]: value,
    })

  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>
            Seus Dados:
          </legend>
          <Input func={this.changeState}/>
          <Combo state={ States } func={this.changeState}/>
        </fieldset>
  
        <TextArea handleMouseEnter={this.handleMouseEnter} />
      </form>
    );
  }

}

export default App;
