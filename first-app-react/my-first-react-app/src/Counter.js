import { useState } from "react"

function Counter(){

       const [x,setx] = useState(0)
       const [y,sety] = useState(0)

    return(
        <>
        count x:{x}
        <br/>
        <button onClick={() => setx(x+1)}>Increment</button>
        <button onClick={() => setx(x-1)}>Decrement</button>
        <br />
        count y:{y}
        <br/>
        <button onClick={() => sety(y+1)}>Increment</button>
        <button onClick={() => sety(y-1)}>Decrement</button>


        </>
    )

}
export default Counter