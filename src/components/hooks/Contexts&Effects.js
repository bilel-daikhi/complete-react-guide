
import { NavLink, Outlet } from "react-router-dom";

const ContextEffects =(props) =>{
    const getNavigationClasses= (isActive)=>{
        return isActive ? "nav-link active" : 'nav-link';
      }
     
        return (<> 
    <div className="row">
        <div className="col-sm-4">
          <h2>React Events & States</h2>
          <h5>Photo of me:</h5>
          <div className="fakeimg">Fake Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>Some Links</h3>
          
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
             
              <NavLink className={(navData) =>getNavigationClasses(navData.isActive)}  to="context">API Context </NavLink>
              <NavLink className={(navData) =>getNavigationClasses(navData.isActive)}  to="effects">Effects</NavLink>
              <NavLink className={(navData) =>getNavigationClasses(navData.isActive)}  to="reducer">Reducer</NavLink>
           
               
            </li>
           
     
          </ul>
          <hr className="d-sm-none"></hr>
        </div>
        <div className="col-sm-8" >
          
            <Outlet   />
     
    </div>
    </div> 
        
         </>);
    }
 
    
     
export default ContextEffects;