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

  numbers = e => {
    let evt = e.target.value;
    this.setState(prevState => ({ input: prevState.input === '0' ? evt : prevState.input + evt }));
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
