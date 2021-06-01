import React from 'react';
import { Link } from 'react-router-dom';
import full from '../../full.png';

export const Landing = () => {
  return (
    <div className='landing'>
      <img src={full} className='App-logo' alt='logo' />
      <Link className='btn-start' to='/game'>
        Start Game
      </Link>
    </div>
  );
};
