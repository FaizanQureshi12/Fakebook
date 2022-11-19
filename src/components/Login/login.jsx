import './login.css'
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import SignUp from './signup';


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const LoginHandler = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('login successful:', user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('firebase login error:', errorCode, errorMessage)
            });
    }

    return (
        <div className='log'>
            <form onSubmit={LoginHandler}>

                Email : <input type="email" name="username" placeholder='Email'
                    onChange={(e) => { setEmail(e.target.value) }} />
                <br />
                Password :<input type="password" name="current-password" autoComplete='current-password'
                    placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
                <br />
                <button type='submit'>Login</button>
                <Link to={SignUp}>Create an Account</Link>
            </form>

        </div>
    );
}
export default Login;