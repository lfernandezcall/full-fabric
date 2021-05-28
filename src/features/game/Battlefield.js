import React from 'react';
import { Player } from './Player';

export const Battlefield = () => {
  const damage = 3;
  const attacker = 'Player 1';
  const deffender = 'Player 2';
  const score = {
    winner: false,
    winnerName: 'Player 1'
  }

  return (
    <div className='battlefield-container'>
      <div className='players-container'>
        <Player name={'Player 1'} hp={20} />
        <Player name={'Player 2'} hp={20} />
      </div>
      {score.winner !== true ?
        <div>
          <h2>{deffender} damage {damage} on last roll</h2>
          <button className='btn-attack'>New Attack for {attacker} </button>
        </div>
        :
        <h2>The winner is {score.winnerName}</h2>
      }
    </div>
  );
};
