import React from "react";

const Project = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card shadow-sm border-light mb-4">
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">{props.date}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
