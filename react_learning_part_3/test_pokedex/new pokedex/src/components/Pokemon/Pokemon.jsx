import './Pokemon.css'
import { Link } from 'react-router-dom'

function Pokemon( {name,image,id} ){

    return (
        <div className='pokemons'>
            <Link to={`pokemon/${id}`}>
            <div className="pokemon-name">{name}</div>
            <div className="pokemon-image">
                <img src={image} alt="" />
            </div>
            </Link>
        </div>
    )

}

export default Pokemon