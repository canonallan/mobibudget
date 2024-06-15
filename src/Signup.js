import React from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase-config.';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './script.css';

const Signup = ({setIsAuth}) => {

  let navigate = useNavigate()

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  const register = async (e)=>{
    e.preventDefault()
    try {
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    console.log(user)
    localStorage.setItem("isAuth", true)
    setIsAuth(true)
    navigate("/")
    } catch (error) {
      console.log(error.message)
    }

  
}



const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result)=> {
    localStorage.setItem("isAuth", true)
    setIsAuth(true)
    navigate("/")

  })

  navigate("/")
}
 

  return (
    <div className="form-container">
      <p className="title">Sign Up</p>
      <form className="form">
        <div className="input-group">
         
          <label htmlFor="username">Email</label>
          <input type="text" name="username" id="username" placeholder="" onChange={(e)=>{setRegisterEmail(e.target.value)}}/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="" onChange={(e)=>{setRegisterPassword(e.target.value)}}/>
        </div>
       
        <button className="sign" onClick={register}>Sign up</button>
      </form>
      <div className="social-message">
        <div className="line"></div>
        <p className="message">Sign up with google</p>
        <div className="line"></div>
      </div>
      <div className="social-icons">
        <button aria-label="Sign up with Google" className="icon" onClick={signInWithGoogle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
        
        
      </div>
      <p className="signup">Already have an account?
        <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Signup;
