// import logo from './logo.svg';  
import './App.css';
import Centerpost from "./components/Centerpost"
import Leftbar from "./components/Leftbar/leftbar"
import Rightbar from "./components/Rightbar/rightbar"
import Navbar from './components/Navbar/navbar'
import Profile from './components/Profile/profile';

function App() {
  return (
 
  <div>
    <Navbar/>
    <Leftbar/>                <Profile/>
<Centerpost/><Rightbar/>
    

  </div>
    );
}

export default App;