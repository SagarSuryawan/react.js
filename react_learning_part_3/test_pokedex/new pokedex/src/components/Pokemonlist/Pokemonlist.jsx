import axios from 'axios'
import { useEffect, useState } from 'react'
import Pokemon from '../Pokemon/Pokemon'
import './Pokemonlist.css'

function PokemonList(){
    // const [pokedexUrl,setpokdexUrl] = useState('https://pokeapi.co/api/v2/pokemon') //url bind statae for pagination before it was simple url stored in variable. It updates when you click the "Next" or "Prev" button.
    // const [nextUrl,setNextUrl] = useState('');
    // const [prevUrl,setPrevUrl] = useState('')
    // const [PokemonList,setPokemonList] = useState([])  //Stores the fetched Pokémon data (initialized as an empty array []).
    // //Stores the Pokémon data fetched from the API.
    // const [isLoading,setIsloading] = useState(true)  //Tracks whether data is still being loaded (true initially)
    // //Tracks whether the data is still being fetched to show a loading state.

    const [pokemonListState,setpokemonListState] = useState({
        PokemonList:[],
        isLoading:true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:"",
        prevUrl:""
    })



    async function fetchpokemons (){
        // setIsloading(true)  //This ensures that the UI displays a loading message until the data is fetched.
        setpokemonListState((state)=>({...state,isLoading:true}))  //this new wat to manage state
        const response = await axios.get(pokemonListState.pokedexUrl)
        console.log(response)
        const Result = response.data.results
        //pagination

        setpokemonListState((state) =>({
            ...state,
            nextUrl:response.data.next,
            prevUrl:response.data.previous
        }))
        // setNextUrl(response.data.next)
        // setPrevUrl(response.data.previous)

        //Fetchind individual pokemon details
        const pokemonDetails = response.data.results  //contains an array of Pokémon with name and URL to fetch more details.
        const pokemonResult =  pokemonDetails.map((pokemon) =>  axios.get(pokemon.url) )
        const pokemonData = await axios.all(pokemonResult)
        console.log("test",pokemonData)
        //executes all API calls concurrently and waits for all responses.
        console.log(pokemonData)
        //axios.all is a function,in which passed array of promises, when all data fetch from array of promises then it shows data. 
        
        //save in pokemonlist line 6 for reference
        const res = pokemonData.map((pokeData) =>{
            const pokemon = pokeData.data
            return {
                id:pokemon.id,
                name:pokemon.name,
                image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                type:pokemon.types
            }
        })
        console.log("res",res)
        setpokemonListState((state)=>
            ({
            ...state,
            PokemonList:res,
            isLoading:false
        }))
        // setIsloading(false) //The loading state is set to false so that Pokémon data is displayed.
    }
    
    useEffect(()=>{
        fetchpokemons()
    },[pokemonListState.pokedexUrl])
    //Runs fetchpokemons whenever pokedexUrl changes.This ensures that new Pokémon data is fetched when pagination buttons are clicked.


    return (
        <div className='pokemon-list-wrapper'>
            <div className='pokemon-block'>
                {
                    pokemonListState.isLoading ? 'Loading....' : pokemonListState.PokemonList.map((p) => (<Pokemon name = {p.name} image = {p.image } key={p.id} id={p.id}/>))
                }
            </div>
            
            <div className="pagination">
                <button disabled = {pokemonListState.prevUrl == null} onClick={() => setpokemonListState({...pokemonListState,pokedexUrl:pokemonListState.prevUrl})} >Prev</button>

                <button disabled = {pokemonListState.nextUrl == null} onClick={() =>setpokemonListState({...pokemonListState,pokedexUrl:pokemonListState.nextUrl})}>Next</button>
            </div>
        </div>
   
    )
}
// If isLoading is true, "Loading..." is displayed.
// Otherwise, the Pokémon list is mapped, and each Pokémon is rendered using the <Pokemon /> component.

export default PokemonList



/*
THIS IS A THEORY OF USEEFFECT AND FETCH DATA FROM API,ALSO USING STATE AND PAGINATION.
1) we can use hook useeffect
useeffect accept two arguments callback function and secound is dependency array.  ==> useEffect( ()=> {} ,[] )
whatever logic in callback execute when component render 1st time,
if you do not pass array, whenever component re-render your callback exicuate [at every re-render]  ==> useEffect( ()=>{}, )
if you  pass empty array , callback logic render on 1 first time not on re-renders. 
if there variable in array,The effect will only run when the value of a changes.React compares the current value of variable to its previous value. If they are different, the effect will run.

step for ftch data from api
1) for now we use for 1st render, means useffect with empty array.
2)means make a async function for fetching data and used that async function in useEffect,and all of this in a Component
LIKE THIS,this is 1 first step and basic just to make it easy.

                                                function PokemonList(){

                                                    async function fetchpokemons (){
                                                        const result = await axios.get('https://pokeapi.co/api/v2/pokemon')
                                                        console.log(result)
                                                    }
                                                    
                                                    useEffect(()=>{
                                                        fetchpokemons()
                                                    },[])
                                                }

                                                export default PokemonList

now we fetch a data on component first load....

    useEffect(()=>{
    fetchpokemons()
    },[])   data is fetch at 1st load, if array is not passed then after 1st render it will call that function at every renders,
    any variable inside that array it fetch data at 1st time and when the variables changes it will re-render....

3) check out the result and exract a pokemon and their details....   which is console.log(result.data.results)
as you check result you saw that their is name and another url for details of pokemons. 

when we clicked on next or previous button using usestate url changes, onces urlchanges then useEffect function again exiecute with new url and perint next 20 pokemons..

HOW IT WORKS
4) First Render

When the component mounts, useEffect runs, calling fetchpokemons().
On pokedexUrl Change

When you click the Next or Prev button, pokedexUrl updates.
This triggers useEffect, which re-fetches the Pokémon list for the new page.

5) Works Together
useState stores API URLs, Pokémon data, and loading status.
useEffect runs fetchpokemons() whenever pokedexUrl changes.
fetchpokemons() fetches Pokémon data, updates state (PokemonList, nextUrl, prevUrl).
Pagination buttons update pokedexUrl, triggering a new API call.

*/