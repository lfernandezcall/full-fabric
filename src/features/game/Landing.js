import React from 'react';
import { Link } from 'react-router-dom';
import full from '../../full.png';

export const Landing = () => {
  return (
    <div className='landing'>
      <img src={full} className='App-logo' alt='logo' />
      <Link to='/game'>
        <button className='btn'>Start Game</button>  
      </Link>
      
    </div>
  );
};
