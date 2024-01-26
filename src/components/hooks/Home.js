import React from 'react';

  

const Home = (props) => {
  const handleLogout = ()=>{
    props.onLogout();
  }
  return (
    <div className='container'>
    <div   className='row'>
   
      <h1>Welcome back!</h1>
      <div className="col-md-12 bg-light text-right">
            
      <button type="button" className='btn btn-danger ' onClick={handleLogout} > Log Out</button>

        </div>
      </div>
    </div>
  );
};

export default Home;