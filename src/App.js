// import logo from './logo.svg';
import './App.css';
import Centerpost from "./components/Centerpost"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"
import Navbar from './components/Navbar'
function App() {
  return (
  //  div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React   
  //       </a>
  //     </header>
  //   </div> <
  <div>
    <Navbar/>
    <Leftbar/><Centerpost/><Rightbar/>
    

  </div>
    );
}

export default App;