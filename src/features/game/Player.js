import React from 'react';
import { Dice } from './Dice';

export const Player = (props) => {
    const { attacker, name, hp, dice } = props;

  return (
    <div className={attacker === true ? 'player attacker' : 'player'}>
      <Dice result={dice} />
      <h2>{name}</h2>
      <h2>HP: {hp}</h2>
    </div>
  );
};
