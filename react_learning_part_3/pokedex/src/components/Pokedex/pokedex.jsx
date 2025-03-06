import { useState } from "react"
import PokemonList from "../PokemonList/PokemonList"
import PokemonDetails from "../PokemonDetails/PokemonsDetails"
import Search from "../Search/Search"
import "./Pokedex.css"

function Pokedex (){
    const [searchTerm, setsearchTerm] = useState('')
    
    return (
        <div className="pokedex-wrapper">
          
          {/* <br /> */}
            <Search updateSearchTerm = {setsearchTerm}/>
            {searchTerm}
            {(!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName = {searchTerm}/> }
        </div>
    )
}

export default Pokedex



/* (!searchTerm):
The user starts typing "Pikachu".
onChange triggers with each keystroke.
The function (e) => updateSearchTerm(e.target.value) runs.
It calls updateSearchTerm("Pikachu"), updating the search term.
The parent component (Pokedex.js) receives this update and re-renders to show Pokémon details.

If searchTerm is empty or falsy, it renders the <PokemonList /> component.
This means the user sees a list of Pokémon when they haven’t searched for anything.
: <PokemonDetails key={searchTerm} pokemonName={searchTerm} />:

If searchTerm has a value, it renders the <PokemonDetails /> component.
The selected Pokémon’s name is passed as a prop (pokemonName={searchTerm}).
The key={searchTerm} helps React identify and update components efficiently.
*/