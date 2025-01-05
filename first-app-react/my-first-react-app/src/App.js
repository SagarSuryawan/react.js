import logo from './logo.svg';
import './App.css';
import Dogcard from './dogcard.js';
import { Userinfo } from './dogcard.js';

function App() {
  return (
    <div className="App">
      hello Sagar ...! This is component you made and import in app.js

      
      <Dogcard name = "Bruno" image = "https://tse4.mm.bing.net/th?id=OIP.vpENuVG6_Ke79c0shGAHMQHaFn&pid=Api&P=0&h=180"/>
      <Dogcard name = "Tiger" image = "https://tse3.mm.bing.net/th?id=OIP.eGZTyqA2KJull4-KKDi92wHaEo&pid=Api&P=0&h=180"/>
      <Userinfo name = "Sagar" age={29}/>
    </div>
  );
}



export default App;
