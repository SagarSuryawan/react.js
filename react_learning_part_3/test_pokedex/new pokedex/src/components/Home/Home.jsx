import Pokedex from "../Header/Header"
import PokemonList from "../Pokemonlist/Pokemonlist"
import './Home.css'

function Home() {
    return(
        <div className="home">
            <Pokedex/>
            <PokemonList/>
        </div>
    )

}

export default Home