import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; 

const Layout = () => {

  
      return (
        <>        
        <Header />
  <div className="container"  style={{
          marginTop: '30px',
          minHeight: '300px'
         }}>
        <Outlet />
    
        </div>
        <Footer/>
        </>

      )
     
};

export default Layout;