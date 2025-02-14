import {Link} from "react-router-dom"
import './Pokemon.css'

function Pokemons ({name,image,id}) {

    return (
        <div className="pokemon-wrapper">
            <Link to= { `pokemon/${id}` } >

            <div className="PokemonName">{name}</div>
            <div>
                <img className="PokemonImage" src={image} alt="" />
            </div>
            
            </Link>
        </div>
    )

}

export default Pokemons
