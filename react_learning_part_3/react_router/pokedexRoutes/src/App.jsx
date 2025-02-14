
import './App.css'
import Pokedex from './component/Pokedex/Pokedex'
import CustomRoute from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {
  

  return (
    <div> 
      <h1 className="pokedex-heading"> <Link to= "/" >Pokedex</Link>  </h1>
      <CustomRoute/>
    </div>
  )
}

export default App
