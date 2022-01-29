import './App.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import clear from './img/clear.jpeg'

function App() {

  const[searchBarValue, setSearchBarValue] = useState('');
  const[userInput, setUserInput] = useState('');
  const[background, setBackground] = useState(clear);

  const handleSearchBar = (e) => {
      setSearchBarValue(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      setUserInput(searchBarValue)
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <SearchBar handleSearchBar={handleSearchBar} handleSubmit={handleSubmit} userInput={userInput} setBackground={setBackground} background={background} />
    </div>
  );
}

export default App;
