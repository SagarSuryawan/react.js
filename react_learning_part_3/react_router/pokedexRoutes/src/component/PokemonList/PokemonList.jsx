import { useEffect, useState }  from "react";
import axios from 'axios'
import Pokemons from "../Pokemons/Pokemon";
import './PokemonList.css'
   function PokemonList() {
    
      const [pokedexUrl, setpokdexUrl] = useState('https://pokeapi.co/api/v2/pokemon')
      const [isLoading, setIsloading] = useState(true)


      const [PokemonList,setPokemonList] = useState([])

      const[nextUrl, setNextUrl] = useState('')
      const[prevUrl, setPrevUrl] = useState('')

      async function fetchPokemon(){

         setIsloading(true)

         const response = await axios.get(pokedexUrl)

         console.log(response.data.results)

         const pokemonDetails = response.data.results
         const pokemonResults = pokemonDetails.map((pokemon) => axios.get(pokemon.url))
         const pokemonData = await axios.all(pokemonResults)
         console.log(pokemonData)

         setNextUrl(response.data.next)
         setPrevUrl(response.data.previous)

         const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data

            return{
               id:pokemon.id,
               name:pokemon.name,
               image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
               type:pokemon.types
            }
         })

         console.log(res)
         setPokemonList(res)
         setIsloading(false)
      }
      useEffect(()=>{
         fetchPokemon()
      },[pokedexUrl])
      


      return(

         <div className='pokemon-list-wrapper'>
            <div className="list">
                {
                    (isLoading) ? 'Loading....' : PokemonList.map((p) => <Pokemons name = {p.name} image = {p.image } key={p.id} id= {p.id}/>)
                }
            </div>
            <div className="pagination">
                <button disabled = {prevUrl == null} onClick={() => setpokdexUrl(prevUrl)} >Prev</button>
                <button disabled = {nextUrl == null} onClick={() => setpokdexUrl(nextUrl)}>Next</button>
            </div>

         </div>
      )

   }


   export default PokemonList