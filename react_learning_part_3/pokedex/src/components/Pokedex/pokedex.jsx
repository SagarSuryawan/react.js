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
            {(searchTerm.length == 0) ? <PokemonList /> : <PokemonDetails pokemonName = {searchTerm}/> }
        </div>
    )
}

export default Pokedex