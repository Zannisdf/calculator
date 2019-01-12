import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Display from './components/display';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      output: '0',
      input: '',
      isSym: true,
      firstDec: true
    }
  }
  reset = () => this.setState({ output:'0', input:'', isSym: true, firstDec: true });

  numbers = e => {
    let evt = e.target.value;
    this.setState(prevState => ({ input: prevState.input === '0' ? evt : prevState.input + evt }));
  };

  operators = e => {
    let evt = e.target.value;
    this.setState(prevState => {
      if (evt === '-'){
        if (prevState.input === '' || /\d-?$/.test(prevState.input)){
          return ({ input: prevState.input + evt, firstDec: true })
        }
      } else {
        if (/\d$/.test(prevState.input)){
          return ({ input: prevState.input + evt, firstDec: true })
        } else if (/\d[-+*/]$/.test(prevState.input)){
          return ({ input: prevState.input.slice(0,-1) + evt, firstDec: true })
        }
      }
    })
  };

  decimal = e => {
    let evt = e.target.value
    this.setState( prevState => {
      if (/\d$/.test(prevState.input) && prevState.firstDec){
        return ({ input: prevState.input + evt, firstDec: false })
      }
    })
  }



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
