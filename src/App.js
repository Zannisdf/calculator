import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Display from './components/display';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      output: '0',
      input: '',
      isSym: false
    }
  }
  reset = () => this.setState({ output:'0', input:'', isSym: false });

  numbers = (e) => {
    let evt = e.target.value;
    this.setState( prevState => ({ output: prevState.output === '0' ? evt : prevState.output + evt, isSym: false }));
  };

  operators = (e) => {
    let evt = e.target.value;
    console.log(this.state.output.length)
    if (this.state.output === '0' && evt === '-'){
      this.setState({ output: evt, isSym: true });
    } else if (this.state.isSym && this.state.output !== '-'){
      this.setState( prevState => ({ output: prevState.output.slice(0,-1) + evt, isSym: true }));
    } else if (!this.state.isSym){
      this.setState( prevState => ({ output: prevState.output + evt, isSym: true }));
    };
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
