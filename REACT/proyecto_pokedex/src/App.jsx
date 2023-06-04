import { useState } from 'react'
import Axios from 'axios';
import './App.css'

const App = () => {

  const [pokemonName, setPokemonName] = useState(""); //variable que setea los pokemon buscados en el input
  const [pokemonChosen, setPokemonChosen] = useState(false); //indica si hay o no un Pokemon seleccionado seteado en su inicio como false
  const [pokemon, setPokemon] = useState({ //en la variable pokemon se almacenará la información/propiedades de los pokemon seleccionados
    name: "",
    number: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: "",
  });


  const searchPokemon = () => { //función para buscar los Pokémons con las peticiones hechas a la API
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) //se concatena la ruta /pokemon/ con el valor almacenado en pokemonName
    .then((res) => {
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
					type: res.data.types[0].type.name,
        });
        setPokemonChosen(true); //si se ejecuta setPokemon, setea pokemonChosen a true para indicar que hay un pokemon seleccionado en el buscador
      })
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value) ;
          }}
          value={pokemonName.toLowerCase()} //para solucionar que el buscador encuentre los pokemon aunque se utilicen mayúsculas
        />
        <div>
	{pokemonName && <button onClick={searchPokemon}>Search Pokémon</button>}
</div>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (<h1 className='choose'> Please choose a Pokémon </h1>) : (
          <>
          <div className='infoPokemon'>
          <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>Number: #{pokemon.number}</h3>
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
            <h4>Speed: {pokemon.speed}</h4>
          </div>
          </>
        )}
      </div>
    </div>
);
};

export default App
