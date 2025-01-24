import axios from 'axios'
import { useEffect } from 'react'

function PokemonList(){

    async function fetchpokemons (){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(response.data.results)
    }
    
    useEffect(()=>{
        fetchpokemons()
    },[])
}

export default PokemonList



/*
THIS IS A THEORY OF USEEFFECT AND FETCH DATA FROM API,ALSO USING STATE AND PAGINATION.
1) we can use hook useeffect
useeffect accept two arguments callback function and secound is dependency array.  ==> useEffect( ()=> {} ,[] )
whatever logic in callback execute when component render 1st time,
if you do not pass array, whenever component re-render your callback exicuate [at every re-render]  ==> useEffect( ()=>{}, )
if you  pass empty array , callback logic render on 1 first time not on re-renders. 
if there variable in array,The effect will only run when the value of a changes.React compares the current value of variable to its previous value. If they are different, the effect will run.

step for ftch data from api
1) for now we use for 1st render, means useffect with empty array.
2)means make a async function for fetching data and used that async function in useEffect,and all of this in a Component
LIKE THIS,this is 1 first step and basic just to make it easy.

                                                function PokemonList(){

                                                    async function fetchpokemons (){
                                                        const result = await axios.get('https://pokeapi.co/api/v2/pokemon')
                                                        console.log(result)
                                                    }
                                                    
                                                    useEffect(()=>{
                                                        fetchpokemons()
                                                    },[])
                                                }

                                                export default PokemonList

now we fetch a data on component first load....

    useEffect(()=>{
    fetchpokemons()
    },[])   data is fetch at 1st load, if array is not passed then after 1st render it will call that function at every renders,
    any variable inside that array it fetch data at 1st time and when the variables changes it will re-render....

3) check out the result and exract a pokemon and their details....   which is console.log(result.data.results)
as you check result you saw that their is name and another url for details of pokemons. 


*/