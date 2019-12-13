import React from 'react';
import Clock from './Clock'
import Login from './Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Clock />
          <Login hidden='true' />
      </header>
    </div>
  );
}

export default App;
