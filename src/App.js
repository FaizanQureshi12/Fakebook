// import logo from './logo.svg';  
import './App.css';
import "./index.css";
import { useEffect, useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Profile from './components/Profile/profile';
import Signup from './components/Login/signup';
import Login from './components/Login/login';
// import Centerpost from "./components/Centerpost"
// import Navbar from './components/Navbar/navbar'
// import Leftbar from "./components/Leftbar/leftbar"
// import Rightbar from "./components/Rightbar/rightbar"


function App() {
  // const[ page, setPage] = useState('Login')
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {

    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('auth change:login', user)
        setIsLogin(true)
      } else {
        console.log('auth change:logout', user)
        // User is signed out
        setIsLogin(false)
      }
    });
    return () => {
      console.log('unSubscribe function called')
      unSubscribe();
    }
  }, [])

  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Signout successfull')
    }).catch((error) => {
      // An error happened.
      console.log('Signout Failed')

    });
  }

  return (
    <div>
      <button onClick={() => { setIsLogin(!isLogin) }}>Toggle</button>

      {(isLogin) ?
        <ul>
          <li> <Link to={'profile'}>Profile</Link>  </li>
          <li><button onClick={logoutHandler}>logout</button></li>
        </ul>
        :
        // null
        // <ul>
        //     <li> <Link to={'/'}>Login</Link>  </li>
        //   <li> <Link to={'profile'}>mystroy</Link>  </li>
        // </ul>
        <Login />
      }
      {/* {(signOut)? : } */}

      {(isLogin) ?

        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="profile" element={<Profile />} />
          <Route path="profile" element={
            <button onClick={logoutHandler}>logout</button>} />
          <Route path="*" element={
            <div>Page Not Found</div>} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path="*" element={
            <Navigate to="/" replace={true} />} />
        </Routes>
      }
      {/* <Signup/> */}
      {/* <Leftbar />  <Rightbar /> */}

      {/* <Navbar />
            <Centerpost /> */}
      {/* 
    <button onClick={()=>{setPage('Login')}}>Login </button>
    <button onClick={()=>{setPage('Profile')}}> Profile</button>
    
{ (page ==='Login')? <Login/> :null} 
{ (page ==='Profile')?<Profile/>:null} 
    */}
    </div>
  );
}

export default App;