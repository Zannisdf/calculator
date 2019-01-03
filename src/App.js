import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Display from './components/display';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      output: '0',
      input: ''
    }
  }
  reset = () => this.setState({ output:'0', input:'' });

  numbers = (e) => {
    let evt = e.target.value;
    this.setState( prevState => ({ output: prevState.output + evt }) );

  }
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
