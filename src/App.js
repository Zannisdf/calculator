import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Display from './components/display';
import trim from './utilities/trim';
import './App.css'
import { handleMultAndDiv, handleSumAndMinus } from './utilities/math'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      output: '0',
      input: '0',
      executed: true,
      operation: []
    }
  }


  reset = () => this.setState({ output:'0', input:'0', executed: true, operation: [] });

  numbers = e => {
    const operator = /^[+-/*]|^0(?!\.)/
    let evt = e.target.value;
    this.setState(prevState => ({
      input: operator.test(prevState.input) || prevState.executed ? evt : prevState.input + evt,
      executed: false
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
    let evt = e.target.value
    this.setState(prevState => {
      if (!/\.|[+-/*]/.test(prevState.input)){
        return ({ input: prevState.input + evt })
      }
    })
  }

  equal = () => {
    this.setState(prevState => {
      let trimmedOperation = /[+-/*]&[^.]/.test(prevState.input) ? prevState.operation.slice(0,-1) : [...prevState.operation, trim(prevState.input)];
      handleMultAndDiv(trimmedOperation);
      handleSumAndMinus(trimmedOperation);
      return ({ input: trimmedOperation[0], output: trimmedOperation[0], executed: true, operation: [] })
    })
  }


  render() {
    return (
      <div className='calculator-container'>
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
