import { Routes, Route } from 'react-router-dom'
import Pokedex from '../components/Pokedex/pokedex'
import PokemonDetail from '../components/PokemonDetails/PokemonsDetails'

function CustomRoute () {

return(
    <Routes>

        <Route path = "/" element = { <Pokedex/>} />
        <Route path = "/pokemon/:id" element = {<PokemonDetail/>} />
        
        
    </Routes>
)

}  


export default CustomRoute