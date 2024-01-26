import React, { useContext } from "react"; 
 
 
import ContextHome from "./ContextHome";
import ContextLogin from "./ContextLogin";
import AuthContext from "../../store/auth-context";

const APIContext  = () => {
     
    const ctx = useContext(AuthContext); 
  console.log('isLoggedIn;  '+ctx.isLoggedIn)
    
    return (
      <> 
        <main>
          {!ctx.isLoggedIn && <ContextLogin   />}
          {ctx.isLoggedIn && <ContextHome   />}
        </main>
       </>
    );
  }
export default APIContext;