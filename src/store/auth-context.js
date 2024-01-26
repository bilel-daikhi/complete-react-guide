import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  email:'',
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState();

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
      console.log('check is logged in inside context; '+storedUserLoggedInInformation)
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
     setIsLoggedIn(false);
    setEmail('')
  };

  const loginHandler = (email,password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    console.log('context email; '+email)
    setEmail(email)
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        email:email,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;