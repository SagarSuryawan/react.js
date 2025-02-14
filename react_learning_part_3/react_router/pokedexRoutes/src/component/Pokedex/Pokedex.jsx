
import Search from "../Search/Search"
import PokemonList from "../PokemonList/PokemonList"

function Pokedex() {

    return (
        <div className="pokedex-wrapper">
          
          <br />
            <Search />
            <PokemonList />
        </div>
    )

}

export default Pokedex