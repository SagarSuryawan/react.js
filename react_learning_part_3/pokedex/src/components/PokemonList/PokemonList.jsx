import { useEffect, useState } from "react"
import axios from "axios"
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon.jsx"

function PokemonList (){

    const [PokemonList ,setPokemonList] = useState([]) //1 
    const [isLoading , setisLoading] = useState(true) //2

    async function fetchPokemons(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')

        const pokemonResult = response.data.results   // results key of object having pokemons

        const pokemonResultPromise = pokemonResult.map((pokemon) =>axios.get(pokemon.url))  //every pokemon has name and url,wrap in array
        
        const pokemonData = await axios.all(pokemonResultPromise)

        console.log(pokemonData)

        //next is to save in PokemonList //1

        const res = (pokemonData.map((pokeData) => {
            const pokemon = pokeData.data

            return {
                id:pokemon.id,
                name:pokemon.name,
                image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types:pokemon.types,

            }
        }))
        console.log(res)
        setPokemonList(res)
        setisLoading(false)
    }

    useEffect(()=>{
        fetchPokemons();

    },[]);
    //fetch at component only first load.

    return (
        <div className="pokemon-list-wrapper">
            <div>Pokemon List</div>
            {isLoading ? 'Loading ...' : 
            PokemonList.map((p)=>(
                <Pokemon name={p.name} image = {p.image} key={p.id} />
            ))
            }
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
