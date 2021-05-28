import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Battlefield } from './features/game/Battlefield';
import { Landing } from './features/game/Landing';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/' render={() => <Landing />}></Route>
        <Route path='/game' render={() => <Battlefield />}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
