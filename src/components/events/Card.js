import { Link } from "react-router-dom";

const Card= (props)=>{


    return (<>
    
    <div   className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
      <Link to="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></Link>
      <div className="card-body">
        <h4 className="card-title">
          <Link to="#">{props.project.name}</Link>
        </h4>
        <p className="card-text"><small className="text-muted">{props.project.type}</small></p>
        <p className="card-text">{props.project.description}</p>
        
      </div>
    </div>
  </div>
    
    </>);
} 
export default Card;
