// import logo from './logo.svg';  
import './App.css';
import "./index.css";
import { useEffect, useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Profile from './components/Profile/profile';
import Signup from './components/Login/signup';
import Login from './components/Login/login';
import Centerpost from "./components/Centerpost"
import Leftbar from "./components/Leftbar/leftbar"
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
      {/* <button onClick={() => { setIsLogin(!isLogin) }}>Toggle</button> */}

      {(isLogin) ?
        <ul className=''>
          <li> <Link to={'profile'}>Profile</Link>  </li>
          <li> <Link to={'centerpost'}>Home</Link>  </li>
          <li> <Link to={'Login'} onClick={logoutHandler} >logout
            {/* <button onClick={logoutHandler}>logout</button> */}
          </Link></li>
        </ul>
        :
        null
      }


      {(isLogin) ?

        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="centerpost" element={<Centerpost />} />
        </Routes>
        :
        null
      }

      {(!isLogin) ?
        <ul>
          {/* <Login /> */}
          <li><Link to={`Signup`}>Signup</Link></li>
          <li><Link to={`Login`}>Login</Link></li>

        </ul>
        :
        null
      }
      {(!isLogin) ?
        <Routes>
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
        </Routes> : null
      }

    </div>
  );
}

export default App;