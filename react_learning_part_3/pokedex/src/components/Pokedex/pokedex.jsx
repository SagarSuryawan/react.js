import Search from "../Search/Search"
import "./Pokedex.css"

function Pokedex (){
    return (
        <div className="pokedex-wrapper">
          <h1 className="pokedex-heading">Pokedex </h1>
          <br />
            <Search />
        </div>
    )
}

export default Pokedex