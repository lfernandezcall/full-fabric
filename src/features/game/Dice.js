import React from 'react';

export const Dice = (props) => {
  return (
    <div className='dice'>
      <h1>{props.result}</h1>
    </div>
  );
};
