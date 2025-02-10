import './Pokemon.css'

function Pokemon( {name,image,id} ){

    return (
        <div className='pokemons'>

            <div className="pokemon-name">{name}</div>
            <div className="pokemon-image">
                <img src={image} alt="" />
            </div>
        </div>
    )

}

export default Pokemon