import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import full from '../../full.png';
import {
  selectInitialGame,
} from './gameSlice';

export const Landing = () => {
  const initialGame = useSelector(selectInitialGame);

  return (
    <div className='landing'>
      <img src={full} className='App-logo' alt='logo' />
      <Link className='btn-start' to='/game'>
        {`${initialGame? 'Start' : 'Continue'} Game`}
      </Link>
    </div>
  );
};
