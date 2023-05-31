import React from "react";
import './App.css'

const App = () => {
  
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
   {characterList.map((character) => (
        <div key={character.id}>
        <h2>id: {character.id}</h2>
        <img src={character.image} alt={character.name} />
          <h2>name: {character.name}</h2>
          <h2>status: {character.status}</h2>
        </div>
      ))}
  </>
  )
}

export default App
