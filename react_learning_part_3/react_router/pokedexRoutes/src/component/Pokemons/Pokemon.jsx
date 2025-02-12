import './Pokemon.css'
function Pokemons ({name,image}) {

    return (
        <div className="pokemon-wrapper">
            <div>{name}</div>
            <img src={image} alt="" />
        </div>
    )

}

export default Pokemons