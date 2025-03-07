import { useState } from "react";
import Child from "../ChildComponent/Child";
import ChilduseEffect from "../ChildComponent/ChilduseEffect";

function Parent() {

    const [count, setCount] = useState(10)
    const [useEffectCount, setuseEffectCount] = useState(20)
    return(
        <div>
           
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <Child count={count} />
        <div>{count}</div>
    
        <button onClick={()=>setuseEffectCount(useEffectCount+1)}>Increase by useEffect</button>
        <ChilduseEffect useEffectCount = {useEffectCount} /> 
        <div>{useEffectCount}</div>
        </div>
    )
}


export default Parent;


/*
current(intital) value of count is 10,clicked on button setCount function calls and increase a value of count by 1
after parent component passed value count value to child componet and child componet rendered it
Each time the button is clicked, the Child component re-renders with the new count value.
✔ Its state or props change.
✔ Its parent re-renders due to a state update.
*/