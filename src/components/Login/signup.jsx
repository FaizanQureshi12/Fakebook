import './login.css'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signupHandler = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user:', user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('firebase signup error:', error);

      });
  }

  return (
    <div className='log'>
      <form onSubmit={signupHandler}>

        Name : <input type="text" name="name" placeholder='Enter Your Name'
          autoComplete='' onChange={(e) => { setName(e.target.value) }} /> <br />
        Email : <input type="email" name="email" placeholder='Email'
          onChange={(e) => { setEmail(e.target.value) }} />
        <br />
        Password :<input type="password" name="password"
          placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
        <br />
        Confirm Password :<input type="password" name="" autoComplete=''
          placeholder='Confirm Password' />
        <br />
        <button type='submit'>SignUp</button>
      </form>

    </div>
  );
}
export default SignUp;