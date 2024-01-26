import React, { useEffect,useState } from "react"; 
 
import Home from "./Home";
import Reducer from "./Reducer";

const LoginReducer  = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
  
      if (storedUserLoggedInInformation === '1') {
        setIsLoggedIn(true);
      }
    }, []);
  
    const loginHandler = (email, password) => {
      // We should of course check email and password
      // But it's just a dummy/ demo anyways
      localStorage.setItem('isLoggedIn', '1');
      setIsLoggedIn(true);
    };
  
    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };
  
    return (
      <React.Fragment> 
        <main>
          {!isLoggedIn && <Reducer onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </React.Fragment>
    );
  }
export default LoginReducer;