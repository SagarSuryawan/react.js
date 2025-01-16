import { useEffect, useState } from "react"

function PokemonList (){

    const [x,setx] = useState(0);
    const [y,sety] = useState(0)

    useEffect(()=>{
        console.log("effect called")
    },[x])

    return (
        <>
        <div>X:{x} <button onClick={() => setx(x+1)}>Inc</button></div>
        <div>Y:{y} <button onClick={() => sety(y+1)}>Inc</button></div>
        </>
    )
}

export default PokemonList

// work of useEffect.?
// => 
// at first render useeffect is exiecuted any HTMLUnknownElement, i want to called useeffect on X changes not on y, means x valur changes callback code render.track changes of x not y.

// what is USEEFFECT.?
// => useeffect as componet loads,whatever passed in callback is execuated. for example [pokemonlist]
// useeffect accepts two arguments a callback and dependency array.
// useEffect(() =>{ }, [])
// when callback execuat.?
// =>when a component render first time,if dependency array is not passed ,whenever component re-render callback code execuated everytime.if dependency array is present then only first time callback code execuated after it won't.