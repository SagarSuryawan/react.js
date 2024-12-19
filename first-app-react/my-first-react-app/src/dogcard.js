<<<<<<< HEAD
import Dogimage from "./image.js"

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
=======
import Dogimage from "./image.js"

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
>>>>>>> 1b9886ae0f0f06e98eb19095bb23ef1551810ffb
// Data send this way =>  1) app >> Dogcard with props or attributes >> dogard >> dogimage 