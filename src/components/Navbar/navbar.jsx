// import {useState} from "react"
import "./navbar.css"

function Navbar(){
    // const [isLit, setLit]= useState(true);
    // const clickHandler = () =>{
    //     console.log('i am fuking girl')  
    //     setLit(!isLit)
    // }

    return(
        <nav className="navbar">
   
              <img src="images/fb.png" className="fb" alt="" />
              <input type="search" placeholder='Search Facebook' id="inp" />
              <img src="images/home.png" className='home' alt="" />
              <img src="images/group.png" className='group' alt="" />
              <img src="images/notification.png" className='notification' alt="" />
        </nav>
    );
}
export default Navbar ;