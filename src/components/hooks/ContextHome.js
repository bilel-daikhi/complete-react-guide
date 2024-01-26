import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

  

const ContextHome = (props) => {
    const ctx =useContext(AuthContext); 
 
  return (
    <div className='container'>
    <div   className='row'>
   
      <h1>Welcome back {ctx.email}!</h1>
      <div className="col-md-12 bg-light text-right">
            
      <button type="button" className='btn btn-danger ' onClick={ctx.onLogout} > Log Out</button>

        </div>
      </div>
    </div>
  );
};

export default ContextHome;