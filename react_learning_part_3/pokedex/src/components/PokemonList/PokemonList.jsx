import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon.jsx";
import usePokemonList from "../../hooks/usePokemonList.jsx";

function PokemonList (){

  const {pokemonListState, setpokemonListState} = usePokemonList("https://pokeapi.co/api/v2/pokemon")

    return (
        <div className="pokemon-list-wrapper">  
            <div className="pokemon-wrapper">
            {pokemonListState.isLoading ? 'Loading ...' : 
            pokemonListState.PokemonList.map((p)=>(
                <Pokemon name={p.name} image = {p.image} key={p.id} id={p.id} />
            ))
            }
            {/* If isLoading is true, it displays the text 'Loading ...' to indicate that the data is still being fetched.
            If isLoading is false, it proceeds to render the Pokémon list. */}
            </div>
            <div className="controls">
                <button disabled = {pokemonListState.prevUrl == null} onClick={() => setpokemonListState({...pokemonListState,pokedexUrl:pokemonListState.prevUrl}) }>Prev</button>

                {/* <button disabled = {pokemonListState.nextUrl == null} onClick={() => {
                    const urlToset = pokemonListState.nextUrl;
                    setpokemonListState({...pokemonListState, pokedexUrl :pokemonListState.nextUrl})
                }}>Next</button> */}
 
                <button disabled = {pokemonListState.nextUrl == null} onClick={() => setpokemonListState({...pokemonListState,pokedexUrl:pokemonListState.nextUrl}) }>Next</button>
            </div>
        </div>
    )
}

export default PokemonList



/*
1. PokemonList State (useState([])):
Purpose: This state is used to store the list of Pokémon data fetched from the API.

Reason: Initially, it's set to an empty array ([]) because no data has been fetched yet. Once the data is fetched using the fetchPokemons function, this state will be updated with the list of Pokémon, which you can later use to display the list in your component.

Usage: Although you're not currently using the fetched data in the render function, the idea is to eventually populate this state with the API data and render it accordingly.

2. isLoading State (useState(true)):
Purpose: This state indicates whether the data is currently being loaded.
Reason: Initially, it is set to true because the data fetching process hasn't started or is in progress. This state helps in conditionally rendering the "Loading..." message until the data is fetched. Once the data is fetched and the fetchPokemons function completes, setisLoading(false) is called to update this state to false, signaling that the data has been successfully loaded.
Usage: It is used in the render function to display a loading message while the data is being fetched and a different message once the data is downloaded.

*/
