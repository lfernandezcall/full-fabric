import gameReducer, { rollDice, initialTurn, play, newGame } from './gameSlice';

describe('game reducer', () => {
  const initialState = {
    players: [
      {
        name: 'Player One',
        dice: null,
        hp: 20,
        attacker: false
      },
      {
        name: 'Player Two',
        dice: null,
        hp: 20,
        attacker: false
      }
    ],
    initialTurn: true,
    damage: {},
    gameOver: false,
    winner: null
  };

  const playerOneWinsRound = {
    players: [
      {
        name: 'Player One',
        dice: 6,
        hp: 20,
        attacker: false
      },
      {
        name: 'Player Two',
        dice: 3,
        hp: 20,
        attacker: true
      }
    ],
    initialTurn: true,
    damage: {},
    gameOver: false,
    winner: null
  };

  const gameOver = {
    players: [
      {
        name: 'Player One',
        dice: 6,
        hp: 12,
        attacker: false
      },
      {
        name: 'Player Two',
        dice: 3,
        hp: 1,
        attacker: true
      }
    ],
    initialTurn: true,
    damage: {},
    gameOver: false,
    winner: null
  };

  it('should handle initial state', () => {
    expect(gameReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle the initial state', () => {
    const val = gameReducer(undefined, initialTurn());

    expect(val.initialTurn).toBe(false);
    expect(val.players[0].attacker || val.players[1].attacker).toBe(true);
  });

  it('should return a valid number', () => {
    const val = gameReducer(initialState, rollDice());

    expect(val.players[0].dice).toBeGreaterThanOrEqual(0);
    expect(val.players[1].dice).toBeGreaterThanOrEqual(0);
    expect(val.players[0].dice).toBeLessThanOrEqual(6);
    expect(val.players[1].dice).toBeLessThanOrEqual(6);
  });

  it('should sum 3 points to the attacker', () => {
    const val = gameReducer(playerOneWinsRound, play());

    expect(val.players[1].hp).toBe(17);
  });

  it('should finish the game and shows Player One as winner', () => {
    const val = gameReducer(gameOver, play());

    expect(val.gameOver).toBe(true);
    expect(val.winner).toBe('Player One');
  });

  it('should restart the game', () => {
    expect(gameReducer(gameOver, newGame())).toEqual(initialState);
  });
});
