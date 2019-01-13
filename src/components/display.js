import React from 'react';

const Display = ({ input, operation, error }) => {

  return (
    <div id='display'>
      <p>{operation.length === 0 ? '0' : operation.join('')}</p>
      <p>{error ? 'ERROR' : input}</p>
    </div>
  )
}

export default Display
