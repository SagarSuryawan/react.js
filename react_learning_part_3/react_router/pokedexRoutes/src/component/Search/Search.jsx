import './Search.css'
function Search ({updateSearchTerm}){
    return (

        <div className="search-wrapper">
           
            <input onChange={(e)=>updateSearchTerm(e.target.value)} id='input-wrapper' type="text" placeholder="pokemon name ..."/>
        </div>
    )
}


export default Search