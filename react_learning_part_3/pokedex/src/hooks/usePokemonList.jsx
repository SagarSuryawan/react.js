import { useEffect, useState } from "react"
import axios from "axios"
import PokemonList from "../components/PokemonList/PokemonList"

 function usePokemonList (url) {

        const [pokemonListState,setpokemonListState] = useState({
            PokemonList: [],
            isLoading:true,
            pokedexUrl:url,
            nextUrl:"",
            prevUrl:""
        })
    // this is intital state of useStates().
    
        async function fetchPokemons(){
            // setisLoading(true) 
            //Keeping all properties of pokemonListState the same (...state).// Only changing isLoading to true.
        setpokemonListState((state) =>({... state, isLoading: true}))  
            // const response = await axios.get(pokedexUrl) //this fetch list of 20 pokemons
            const response = await axios.get(pokemonListState.pokedexUrl)
            console.log("response",response)

            const pokemonResult = response.data.results   // we get the array of pokemons,this array has name and url,url for details of pokemons.

            // setnextUrl(response.data.next)
            // setpokemonListState({...pokemonListState, nextUrl:response.data.next})
            // setprevUrl(response.data.previous)
            setpokemonListState((state) => ({
                ...state, 
                    nextUrl:response.data.next,
                    prevUrl:response.data.previous}
            ))

        
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
                    types:pokemon.types
                }
            }))
            console.log("pokemon",res)
            setpokemonListState((state)=> 
                ({...state,
                    PokemonList:res,
                    isLoading:false}
            ))
            // setisLoading(false)
        }

        useEffect(()=>{
            fetchPokemons();
        },[pokemonListState.pokedexUrl]);
        //fetch at component only first load.

        return {pokemonListState,setpokemonListState}
 }

export default usePokemonList