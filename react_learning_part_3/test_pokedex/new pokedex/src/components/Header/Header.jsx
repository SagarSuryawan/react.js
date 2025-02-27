 import './Header.css'
 import Search from '../Search/Search'
  
 function Pokedex (){

    return (
        <div className="pokdex-wrapper">

            <h1 className="appHeading">Pokemon Shop</h1>
            <br />
            <Search />
        </div>
    )
 }

 export default Pokedex