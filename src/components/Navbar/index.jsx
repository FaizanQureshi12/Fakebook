import {useState} from "react"
import "./index.css"

function Navbar(){
    const [isLit, setLit]= useState(true);
    const clickHandler = () =>{
        console.log('i am fuking girl')
        setLit(!isLit)
    }

    return(
        // <nav className={`room ${(isLit)?"Lit" : "dark"}`}>
        <nav className="navbar">
    Room is {(isLit)? "Lit":"Dark"} 
    <br />
<button onClick={clickHandler}>fuke</button>
            
        </nav>
    );
}
export default Navbar ;