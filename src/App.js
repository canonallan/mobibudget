import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';

import './script.css';
import Home from './pages/Home';


const App = () => {

  const[isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuth");
    if (isAuthenticated) {
      setIsAuth(true);
    }
  }, []);

  

 

  



  
 


  return (
    <Router>
      <nav>
        
        {isAuth &&<Link to ="/logout" >Logout</Link> }
      </nav>
      <Routes>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        <Route path="/" element={<Home setIsAuth={setIsAuth} isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
};

export default App;
