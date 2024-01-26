import useHttp from "../use-http";
import { useRef } from "react";

const NewProject = (props) => {
  const titleRef = useRef("");
  const imageRef = useRef("");
  const descriptionRef = useRef("");
  const dateRef = useRef("");

  const { isLoading, error, sendRequest: sendProjectRequest } = useHttp();

  // could add validation here...
  const createProject = (project, projectData) => {
    console.log(projectData);
    props.onAddProject({
      id: projectData.name,
      project: {
        image: project.image,
        title: project.title,
        description: project.description,
        date: project.date,
      },
    });
  };
  const addProject = (event) => {
    event.preventDefault();
    enterProjectHandler();
  };
  const enterProjectHandler = async () => {
    const project = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      descrition: descriptionRef.current.value,
      date: dateRef.current.value,
    };
    sendProjectRequest(
      {
        url: "https://react-demos-f9e0a-default-rtdb.firebaseio.com/projects.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: project,
      },
      createProject.bind(null, project)
    );
  };

  return (
    <section>
      <form onSubmit={addProject}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Project name"
              ref={titleRef}
            />
          </div>
          <div className="col">
            <input
              type="date"
              className="form-control"
              placeholder="Date"
              ref={dateRef}
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
            ref={imageRef}
          />
        </div>

        <div className="form-group">
          <label htmlFor="opening-text">Description</label>
          <textarea
            rows="5"
            className="form-control"
            id="opening-text"
            ref={descriptionRef}
          ></textarea>
        </div>

        <button className="btn btn-primary">
          {isLoading ? "Sending..." : "Add Project"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </section>
  );
};

export default NewProject;
