import { useEffect } from 'react';
import { auth } from '../firebase-config.';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = ({setIsAuth, isAuth}) => {

    let navigate = useNavigate()

    const signUserOut = () =>{
        signOut(auth).then(() => {
          localStorage.clear()
          setIsAuth(false)
          window.location.pathname="/login"
         
        })
    }

    useEffect(()=>{
        if(!isAuth) {
            navigate("/login")
        }
    }, [isAuth,navigate])
    return ( 
        <div><h1>Home</h1>
            <button onClick={signUserOut}>Logout</button>
        </div>
        
            
            
     );
}
 
export default Home;