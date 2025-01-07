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



export const Counter1 = () => {

    const [a,seta] = useState(0)

    return (
        <>
        <h1>This is condtional Rendering</h1>
        Count:{a} is {(a % 2 === 0) ? 'Even' : 'Odd'}
        <button onClick = {() => seta(a+1)}>inc</button>
        <button onClick = {() => seta(a-1)}>dec</button>
        </>
    )
}

export const Inputrender = () => {
    const [editing , setEditing] = useState(false)

    return (
        <>
        <br/>
        <br/>
        {
            (editing) ? <input/> :<p>some todo</p>
        }
        <br/>
        <button onClick={()=> setEditing (!editing)}>Click</button>
        </>
    )
}

export const Todoss = () => {
    const  [todos, setTodos] = useState(['todo1','todo2'])

    return (
        <ul>
            {todos.map((el) => <li>{el}</li>)}
            <button onClick={() => setTodos([...todos,'another one'])}>Click</button>
        </ul>
    )
}