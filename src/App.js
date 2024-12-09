import inventorypic from './inventorypic.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // State hooks for managing input values
  const [inputValue, SetInputValue] = useState('');
  const [SecondInputValue, SetSecondInputValue] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-header">Welcome to the Inventory Tracker</h1>
        <img src={inventorypic} className="App-logo" alt="logo" />
        <p>
          <code>The first prototype.</code>
        </p>

        {/* First input */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => SetInputValue(e.target.value)} // Corrected 'SetinputValue' to 'SetInputValue'
          placeholder="Enter your input."
          className="input-field"
        />

        {/* Second input */}
        <input
          type="text"
          value={SecondInputValue}
          onChange={(e) => SetSecondInputValue(e.target.value)}
          placeholder="Enter something."
          className="input-field"
        />

        <p>Current input: {inputValue}</p>
        <p>Second input: {SecondInputValue}</p>
      </header>
    </div>
  );
}

export default App;
