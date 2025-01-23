import { useEffect, useState } from "react"
import axios from "axios"
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon.jsx"

function PokemonList (){

    const [PokemonList ,setPokemonList] = useState([]) //1 
    const [isLoading , setisLoading] = useState(true) //2

    const [pokedexUrl,setpokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    const [nextUrl ,setnextUrl] = useState("")
    const [prevUrl ,setprevUrl] = useState("")

    async function fetchPokemons(){
        setisLoading(true)
        const response = await axios.get(pokedexUrl) //this fetch list of 20 pokemons
        console.log("response",response)

        const pokemonResult = response.data.results   // we get the array of pokemons,this array has name and url,url for details of pokemons.

        setnextUrl(response.data.next)
        setprevUrl(response.data.previous)

       
        const pokemonResultPromise = pokemonResult.map((pokemon) =>axios.get(pokemon.url))  //iterating over the array of pokemons, and using their url to create array of promises,that will download those 20 pokemons.


        
        const pokemonData = await axios.all(pokemonResultPromise)
       //passing that promise array to axios.all and this is array of pokemons detailed data.

        console.log("pokemons",pokemonData)

        //next is to save in PokemonList //1

        const res = (pokemonData.map((pokeData) => { //iterate on each the data of each pokemon and exract id,names,image and types.
            const pokemon = pokeData.data

            return {
                id:pokemon.id,
                name:pokemon.name,
                image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types:pokemon.types,

            }
        }))
        console.log("pokemon",res)
        setPokemonList(res)
        setisLoading(false)
    }

    useEffect(()=>{
        fetchPokemons();
    },[pokedexUrl]);
    //fetch at component only first load.

    return (
        <div className="pokemon-list-wrapper">  
            <div className="pokemon-wrapper">
            {isLoading ? 'Loading ...' : 
            PokemonList.map((p)=>(
                <Pokemon name={p.name} image = {p.image} key={p.id} />
            ))
            }
            {/* If isLoading is true, it displays the text 'Loading ...' to indicate that the data is still being fetched.
            If isLoading is false, it proceeds to render the Pokémon list. */}
            </div>
            <div className="controls">
                <button disabled = {prevUrl == null} onClick={() =>setpokedexUrl(prevUrl)}>Prev</button>
                <button disabled = {nextUrl == null} onClick={() =>setpokedexUrl(nextUrl)}>Next</button>
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
