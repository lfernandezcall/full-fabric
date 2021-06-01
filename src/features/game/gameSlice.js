import { createSlice } from '@reduxjs/toolkit';
import { dice } from './helper/dice';

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

export const gameSlice = createSlice({
  name: 'game',
  initialState: JSON.parse(window.localStorage.getItem('state')) || initialState,
  reducers: {
    rollDice: (state) => {
      state.players = state.players.map((player) => ({ ...player, dice: dice() }));
    },
    initialTurn: (state) => {
      state.players[0].attacker = Math.random() < 0.5;
      state.players[1].attacker = !state.players[0].attacker;
      state.initialTurn = false;
    },
    play: (state) => {
      state.players = state.players.map((player) => ({ ...player, attacker: !player.attacker }));
      state.damage = state.players.reduce((acc, item) => {
        if (item.attacker === true) {
          acc.attack = item.dice;
        } else if (item.attacker === false) {
          acc.defense = item.dice;
        }
        return acc;
      }, {});
      state.damage.result = state.damage.attack - state.damage.defense;
      state.players = state.players.map((player) =>
        player.attacker === false && Math.sign(state.damage.result) >= 0
          ? { ...player, hp: player.hp - state.damage.result }
          : player
      );
      state.gameOver = state.players.find((player) => player.hp <= 0) && true;
      state.winner = state.players.find((player) => player.hp > 0).name;
    },
    newGame: (state) => {
      window.localStorage.clear();
      state.initialTurn = true;
      state.damage = {};
      state.gameOver = false;
      state.winner = null;
      state.players = initialState.players;
    }
  }
});

export const selectInitialGame = (state) => state.game.initialTurn;
export const selectPlayers = (state) => state.game.players;
export const selectState = (state) => state.game;
export const selectAssault = (state) =>
  state.game.players.reduce((acc, item) => {
    if (item.attacker === true) {
      acc.attacker = item.name;
    } else if (item.attacker === false) {
      acc.defender = item.name;
    }
    return acc;
  }, {});
export const selectDamage = (state) => state.game.damage.result;
export const selectGameOver = (state) => state.game.gameOver;
export const selectWinner = (state) => state.game.winner;
export const { rollDice, initialTurn, play, winner, newGame } = gameSlice.actions;

export default gameSlice.reducer;
