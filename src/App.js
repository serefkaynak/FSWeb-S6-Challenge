import React, {useState, useEffect }from 'react';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  },[]);


  console.log(characters);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    return (
      <div className="App">
        <h1 className="Header">Karakterler</h1>
        <ul>            
          {characters.map((character, index) => (
            <li key={index}>{character.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default App;
