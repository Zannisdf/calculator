import React, { Component } from 'react';

class Keyboard extends Component {
  render() {
    const { numbers, operators, decimal, reset, equal, back } = this.props
    return(
      <div className='button-container'>
        <button onClick={reset} id="clear">AC</button>
        <button onClick={operators} value="/">/</button>
        <button onClick={operators} value="*">x</button>
        <button onClick={numbers} value="7">7</button>
        <button onClick={numbers} value="8">8</button>
        <button onClick={numbers} value="9">9</button>
        <button onClick={operators} value="-">-</button>
        <button onClick={numbers} value="4">4</button>
        <button onClick={numbers} value="5">5</button>
        <button onClick={numbers} value="6">6</button>
        <button onClick={operators} value="+">+</button>
        <button onClick={numbers} value="1">1</button>
        <button onClick={numbers} value="2">2</button>
        <button onClick={numbers} value="3">3</button>
        <button onClick={equal} id="equals">=</button>
        <button onClick={numbers} value="0">0</button>
        <button onClick={decimal} value=".">.</button>
        <button onClick={back} id="back">back</button>
      </div>
    )
  }
}

export default Keyboard;
