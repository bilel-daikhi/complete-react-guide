const ProjectItem = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card shadow-sm border-light mb-4">
        <img
          className="card-img-top"
          src={props.project.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.project.title}</h5>
          <p className="card-text">{props.project.description}</p>
          <p className="card-text">
            <small className="text-muted">{props.project.date}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
