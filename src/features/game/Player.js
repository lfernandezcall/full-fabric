import React from 'react';
import { Dice } from './Dice';

export const Player = (props) => {
    return (
        <div className='player'>
            <Dice />
            <h2>{props.name}</h2>
            <h2>HP: {props.hp}</h2>
        </div>
    )
};
