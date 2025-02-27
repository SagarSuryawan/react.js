  import { Routes,Route } from "react-router-dom"
  import { Link } from "react-router-dom"
  import Home from "../components/Home/Home"
  import PokemonDetails from "../components/PokemonDetails/PokemonDetails"

  function CustomRoutes() {
    return (
        <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/pokemon/:id" element = {<PokemonDetails/>} />
    </Routes>
    )
    
  }

  export default CustomRoutes