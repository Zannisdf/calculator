import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Display from './components/display';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      output: '0',
      input: '',
      isSymAllowed: true
    }
  }
  reset = () => this.setState({ output:'0', input:'', isSymAllowed: true });

  numbers = (e) => {
    let evt = e.target.value;
    this.setState( prevState => {
      if (prevState.input === '' && evt === '0'){
        return ({ input: prevState.input });
      } else {
        return ({ input: prevState.input + evt });
      }
      // input: prevState.input === '' ? evt === '0' ? prevState.input : prevState.input + evt : prevState.input + evt
    });
  };

  operators = (e) => {
    let evt = e.target.value;
    if (this.state.isSymAllowed){
      if (this.state.output === '0' && evt === '-'){
        this.setState( prevState => ({
          output: evt,
          isSymAllowed: false
        }));
      } else if (this.state.output !== '-'){
        this.setState( prevState => ({
          output: isNaN(prevState.output.slice(-1)) ? prevState.output.slice(0,-1) + evt : prevState.output + evt,
          input: ''
        }));
      };
    };
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
