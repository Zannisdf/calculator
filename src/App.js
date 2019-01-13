import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Display from './components/display';
import trim from './utilities/trim';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      output: '0',
      input: '0',
      operation: []
    }
  }


  reset = () => this.setState({ output:'0', input:'0', operation: [] });

  numbers = e => {
    const operator = /^[+-/*]|^0(?!\.)/
    let evt = e.target.value;
    this.setState(prevState => ({
      input: operator.test(prevState.input) ? evt : prevState.input + evt
    }))
  };

  operators = e => {
    let evt = e.target.value;
    this.setState(prevState => ({
      input: evt,
      operation: /\d/.test(prevState.input) ? [...prevState.operation, trim(prevState.input), evt] : [...prevState.operation.slice(0,-1), evt]
    }))
  };

  decimal = e => {
    console.log(this.state.operation)
    let evt = e.target.value
    this.setState(prevState => {
      if (!/\.|[+-/*]/.test(prevState.input)){
        return ({ input: prevState.input + evt })
      }
    })
  }

  equal = () => {
    this.setState(prevState => {
      let trimmedOperation = /[+-/*]/.test(prevState.input) ? prevState.operation.slice(0,-1) : [...prevState.operation, trim(prevState.input)];
      console.log(trimmedOperation)
      let i = 0
      while (trimmedOperation.includes('*') || trimmedOperation.includes('/')) {
        if (trimmedOperation[i] === '*'){
          let mult = parseFloat(trimmedOperation[i-1]) * parseFloat(trimmedOperation[i+1]);
          trimmedOperation.splice(i-1,3,mult);
          i = 0;
        } else if (trimmedOperation[i] === '*'){
          let div = parseFloat(trimmedOperation[i-1]) / parseFloat(trimmedOperation[i+1]);
          trimmedOperation.splice(i-1,3,div);
          i = 0;
        }
        i++;
      }
      while (trimmedOperation.length > 1) {
        if (trimmedOperation[i] === '+'){
          let sum = parseFloat(trimmedOperation[i-1]) + parseFloat(trimmedOperation[i+1]);
          trimmedOperation.splice(i-1,3,sum);
          i = 0;
        } else if (trimmedOperation[i] === '-'){
          let minus = parseFloat(trimmedOperation[i-1]) - parseFloat(trimmedOperation[i+1]);
          trimmedOperation.splice(i-1,3,minus);
          i = 0;
        }
        i++;
      }
      return ({ input: '', output: trimmedOperation[0], operation: [] })
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
