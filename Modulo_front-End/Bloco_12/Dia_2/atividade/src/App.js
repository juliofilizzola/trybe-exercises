
import Combo from './Component/Combo';
import Input from './Component/Input';
import States from './States';


function App() {

  this.state = {
    counterMouserEnter: false,
  }



handleMouseEnter() {
  if(this.state.counterMouserEnter === false) {
    alert('Preencha isso, seu arrombado!')
  }
}
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

export default App;
