import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      {game.status === "created" && <Login handleStart={game.handleStart} />}
    </div>
  );
}

export default App;
