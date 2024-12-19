function Dogimage(props){
    return(
        <>
        <img src = {props.src}/>
        </>
        
    )
}


export default Dogimage


// dogcard have name and image of dog.inside componet(dogcard) there is another component called Dogimage which have image inside it.
// Dogcard component used in app.js main file.
// props are way to send data from parent to child component.
// Data send this way =>  1) app >> Dogcard with props or attributes >> dogard >> dogimage 