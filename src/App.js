import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dice } from './features/game/Dice';
import { Landing } from './features/game/Landing';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/' render={() => <Landing />}></Route>
        <Route path='/game' render={() => <Dice />}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
