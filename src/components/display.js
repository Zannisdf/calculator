import React from 'react';

const Display = ({ input, operation }) => (
  <div id='display'>
    <p>{operation.length === 0 ? '0' : operation.join('')}</p>
    <p>{input}</p>
  </div>
)

export default Display
