function Pokemons ({name,image}) {

    return (
        <div>
            <div>{name}</div>
            <img src={image} alt="" />
        </div>
    )

}

export default Pokemons