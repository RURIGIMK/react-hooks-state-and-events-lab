import React, { useState } from 'react';
import './App.css';
import ShoppingList from './ShoppingList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Grocery List App</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <ShoppingList />
    </div>
  );
}

export default App;
