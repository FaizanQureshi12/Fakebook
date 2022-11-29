// import {useState} from "react"
import "./navbar.css"
import {MdOndemandVideo } from 'react-icons/md'; 
import {BsMessenger } from 'react-icons/bs'; 
import { SiFacebookgaming } from 'react-icons/si'; 

function Navbar(){
  
    return(
        <nav className="navbar">
          <img src="images/fb.png" className="fb" alt="" />
        <input type="search" placeholder='Search Facebook' id="inp" />
      
       <div className="hlink">  
        <img src="images/home.png" className='home' alt="" />
        <MdOndemandVideo className="home"/ > 
            <img src="images/group.png" className='group' alt="" />
              <SiFacebookgaming className="home"/>
              </div>
<div></div>
              <div className="ricon">
              <div className="plus">+</div>
              <BsMessenger className="home"/ >
                <button className="btn">Login</button>
              <img src="images/notification.png" className='notification' alt="" />
                <img src="images/Profile.jpg" className="Profile" alt="" />
                </div>
        </nav>
    );
}
export default Navbar ;