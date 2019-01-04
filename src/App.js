import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Display from './components/display';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      output: '0',
      input: '',
      init: true,
      isSymAllowed: true,
      operation: []
    }
  }
  reset = () => this.setState({ output:'0', input:'', isSymAllowed: true, init: true });

  //Zero is not allowed as first input digit
  numbers = (e) => {
    let evt = e.target.value;
    this.setState( prevState => {
      if (prevState.init && evt !== '0'){
        return ({ input: prevState.input + evt, init: false });
      } else if (!prevState.init) {
        return ({ input: prevState.input + evt });
      }
    });
  };

  operators = (e) => {
    let evt = e.target.value;
    this.setState( prevState => {
      if (prevState.init && evt === '-'){
        return ({ input: evt })
      } else if (!prevState.init){
        return ({ input: '', init: true, isSymAllowed: true })
      };
    });
  };


  render() {
    return (
      <div>
        <Display
          input={this.state.input}
          output={this.state.output}/>
        <Keyboard
          numbers={this.numbers}
          operators={this.operators}
          decimal={this.decimal}
          reset={this.reset}
          equal={this.equal}
          back={this.back}/>
      </div>
    );
  }
}

export default App;
