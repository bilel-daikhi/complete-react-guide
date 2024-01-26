import ProjectItem from "./ProjectItem";

const Projects = (props) => {
  let projectList = <h2>No projects found. Start adding some!</h2>;

  if (props.items.length > 0) {
    console.log(props.items);
    projectList = props.items.map((project) => (
      <ProjectItem key={project.id} project={project.project} />
    ));
  }

  let content = projectList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = "Loading projects...";
  }

  return (
    <section>
      <div className="container">
        <div className="row mb-md-2 mt-5">{content}</div>
      </div>
    </section>
  );
};

export default Projects;
