import { Form, useNavigate } from "react-router-dom";

function ProjectForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method="post">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Project name"
            name="title"
          />
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            name="date"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputLink">Image Link</label>
        <input
          type="text"
          className="form-control"
          id="inputLink"
          placeholder="Image link"
          name="image"
        />
      </div>

      <div className="form-group">
        <label htmlFor="opening-text">Description</label>
        <textarea
          rows="5"
          className="form-control"
          id="opening-text"
          name="description"
        ></textarea>
      </div>

      <button
        className="btn btn-warning btn-lg btn-block"
        onClick={cancelHandler}
      >
        Cancel
      </button>
      <button className="btn btn-primary btn-lg btn-block">Add Project</button>
    </Form>
  );
}

export default ProjectForm;
