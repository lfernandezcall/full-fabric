import { rollDice } from './helper/rollDice';
import React from 'react';

export const Dice = () => {
  return (
    <div className='dice'>
      <h1>{rollDice()}</h1>
    </div>
  );
};
