import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dummy from 'components/Dummy';
import { Helper } from '@lokobee/common';
import Apple from 'lokobee-gui';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code>
        </p>
        <Apple />
        <Dummy />
        <Helper text="Hello" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
