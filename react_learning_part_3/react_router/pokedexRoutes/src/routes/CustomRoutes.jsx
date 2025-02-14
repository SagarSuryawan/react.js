
import {Routes,Route} from 'react-router-dom'
import Pokedex from '../component/Pokedex/Pokedex'
import PokemonDetails from '../component/PokemonDetails/PokemonDetail'


function CustomRoute() {

    return (

        <Routes>
            <Route path='/' element = { <Pokedex />}/>
            <Route path='/pokemon/:id' element = { <PokemonDetails /> }/>
        </Routes>

    )
}

export default CustomRoute