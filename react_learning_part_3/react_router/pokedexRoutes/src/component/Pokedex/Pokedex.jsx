
import Search from "../Search/Search"
import PokemonList from "../PokemonList/PokemonList"
import PokemonDetails from "../PokemonDetails/PokemonDetail"
import { useState } from "react"

function Pokedex() {

    const [ searchTerm, setsearchTerm ] = useState('')
    return (
        <div className="pokedex-wrapper">
          
          <br />
            <Search updateSearchTerm = {setsearchTerm}/>
            {searchTerm}
            {(!searchTerm) ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName = {searchTerm} />}
            
        </div>

    )

}

export default Pokedex