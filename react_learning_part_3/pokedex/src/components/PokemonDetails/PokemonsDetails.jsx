import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import './PokemonsDetails.css'

function PokemonDetail () {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})  //useState({}) initializes pokemon as an empty object ({}).
    // setPokemon is a function that updates pokemon with new data.

    async function downloadPokemon(){
        const response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log("pokemon sa",response.data)
        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t) => t.type.name)
        })
    }

 
    useEffect(()=> {
        downloadPokemon()
    },[])

    /*useEffect runs downloadPokemon() when the component mounts.
downloadPokemon() fetches Pokémon details and updates pokemon using setPokemon().
Dependency array ([]) makes sure this runs only once (on mount).

*/


return(
    
    <div className="pokemon-details-wrapper">

        
        <img className="pokemonImage" src={pokemon.image}/>
        <div className="pokemonName">Name:<span>{pokemon.name}</span></div>
        <div className="pokemonHeight"> Height:<span>{pokemon.height}</span></div>
        <div className="pokemonWeight"> Weight:<span>{pokemon.weight}</span> </div>
        <div className="type">
            {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
        </div>
    </div>
)   

}

export default PokemonDetail


/*
EXPLAINATION

 fetching and displaying details about a Pokémon based on the id parameter from the URL.
  Extracts the id from the URL. const {id} = useParams()

  <div className="type">
            {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
        </div>

  <div className="type"> → A container <div> with the class "type". This is used for styling all Pokémon types.
{pokemon.types && ...} → This ensures that pokemon.types exists before attempting to map over it. If it's undefined, it won’t crash the app.

.map((t) => <div key={t}> {t} </div>) →
.map() loops over pokemon.types (an array of type names, e.g., ["fire", "flying"]).
Each type (t) is wrapped inside a <div>.

key={t} ensures React’s reconciliation works correctly.
</div> → Closing tag for the outer <div className="type">.
*/