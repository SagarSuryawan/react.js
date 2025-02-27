import { useParams } from "react-router-dom"
import axios from "axios"
import { useState,useEffect } from "react"
import './PokemonDetails.css'

function PokemonDetails () {
    const {id} = useParams()
    const [pokemon,setPokemon] = useState({})

    async function DowmloadPokemonDetails() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log("response",response.data)
        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=> t.type.name)
        })

    }

    useEffect(()=>{
        DowmloadPokemonDetails()
    },[])


    return(
        <div className="pokemon-details-wrapper">

        
        <img className="pokemonImage" src={pokemon.image}/>
        <div className="pokemonName">Name:<span>{pokemon.name}</span></div>
        <div className="pokemonHeight">Height:<span>{pokemon.height}</span></div>
        <div className="pokemonWeight">Weight:<span>{pokemon.weight}</span> </div>
        <div className="type">
            {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
        </div>
    </div>
    )
 
    
        
}

export default PokemonDetails