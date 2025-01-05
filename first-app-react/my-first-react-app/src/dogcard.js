import React from "react";
import Dogimage from "./image.js"
// function Dogcard (props){
//     return (
//         <>
//             <h3>{props.name}</h3>  
//            <Dogimage src = {props.image}/>
//         </>
//     )
// }

 //export default Dogcard
// dogcard have name and image of dog.inside componet(dogcard) there is another component called Dogimage which have image inside it.
// Dogcard component used in app.js main file.
// props are way to send data from parent to child component.



function Dogcard (props){
    return (
        <>
            <h3>{props.name}</h3>  
           <Dogimage src = {props.image}/>
        </>
    )
}

export default Dogcard

// dogcard have name and image of dog.inside componet(dogcard) there is another component called Dogimage which have image inside it.
// Dogcard component used in app.js main file.
// props are way to send data from parent to child component.

// Data send this way =>  1) app >> Dogcard with props or attributes >> dogard >> dogimage 

export const Userinfo = (props)=> {
    return (
        <>
        <h1> Userinfo props </h1>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        </>
    )
}

export const Courseinfo = (props)=>{
    return(
        <>
        <h3>Courses</h3>
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
        </>
    )
}
 

