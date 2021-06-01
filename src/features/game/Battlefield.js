import React, { useEffect } from 'react';
import { Player } from './Player';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTurn,
  selectDices,
  selectState,
  selectDamage,
  selectAssault,
  selectInitialGame,
  initialTurn,
  selectGameOver,
  selectWinner,
  rollDice,
  play,
  newGame
} from './gameSlice';

export const Battlefield = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectState);
  const dices = useSelector(selectDices);
  const turn = useSelector(selectTurn);
  const damage = useSelector(selectDamage);
  const assault = useSelector(selectAssault);
  const initialGame = useSelector(selectInitialGame);
  const gameOver = useSelector(selectGameOver);
  const winnerName = useSelector(selectWinner);

  const handleClick = () => {
    initialGame && dispatch(initialTurn());
    dispatch(rollDice());
    dispatch(play());
  };
  const startAgain = () => {
    dispatch(newGame());
  };

  useEffect(() => window.localStorage.setItem('state', JSON.stringify(state)));

  return (
    <div className='battlefield-container'>
      <div className='players-container'>
        <Player dice={dices[0]} name={'Player 1'} hp={state.players[0].hp} attacker={turn[0]} />
        <Player dice={dices[1]} name={'Player 2'} hp={state.players[1].hp} attacker={turn[1]} />
      </div>
      {gameOver !== true ? (
        <div>
          {!initialGame && (
            <h2>
              {Math.sign(damage) <= 0 || undefined
                ? 'no damage made'
                : `${assault.attacker} damages with ${damage} points on last roll`}
            </h2>
          )}
          <button key={'btn-attack'} onClick={() => handleClick()} className='btn-attack'>
            {initialGame
              ? 'Click to start the game'
              : `Click for a new Attack for ${assault.defender}`}
          </button>
        </div>
      ) : (
        <div>
          <h2>The winner is {winnerName}</h2>
          <button key={'btn-new-game'} onClick={() => startAgain()} className='btn-new-game'>
            Click to start again!
          </button>
        </div>
      )}
    </div>
  );
};
