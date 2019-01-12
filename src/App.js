import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Display from './components/display';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      output: '0',
      input: '',
      operation: []
    }
  }
  reset = () => this.setState({ output:'0', input:'', operation: [] });

  numbers = e => {
    const operator = /^[+-/*]/
    let evt = e.target.value;
    this.setState(prevState => ({
      input: operator.test(prevState.input) ? evt : prevState.input + evt
    }))
  };

  operators = e => {
    let evt = e.target.value;
    this.setState(prevState => ({
      input: evt,
      operation: /\d/.test(prevState.input) ? [...prevState.operation, prevState.input, evt] : [...prevState.operation.slice(0,-1), evt]
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
