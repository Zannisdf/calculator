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
    this.setState( prevState => ({ output: prevState.output === '0' ? evt : prevState.output + evt, isSymAllowed: true }));
  };

  operators = (e) => {
    let evt = e.target.value;
    console.log(this.state.output.length)
    if (this.state.isSymAllowed){
      if (this.state.output === '0' && evt === '-'){
        this.setState( prevState => ({ output: evt, isSymAllowed: false }))
      } else if (this.state.output !== '-'){
        this.setState( prevState => ({ output: isNaN(prevState.output.slice(-1)) ? prevState.output.slice(0,-1) + evt : prevState.output + evt }))
      }
    }
  };

  render() {
    return (
      <div>
        <Display
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
