import React from 'react';
import { Dice } from './Dice';

export const Player = (props) => {
    const {attacker, name, hp} = props
    return (
        <div className={attacker === name ? 'player attacker' : 'player'}>
            <Dice />
            <h2>{name}</h2>
            <h2>HP: {hp}</h2>
        </div>
    )
};
