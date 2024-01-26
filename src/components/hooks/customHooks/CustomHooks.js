import { useEffect, useState } from "react";
import useCounter from "./use-counter";
import useHttp from "./use-http";
import Projects from "./tasks/Projects";
import NewProject from "./tasks/NewProject";

const CustomHooks = () => {
  const counterForward = useCounter(true);
  const counterBackward = useCounter(false);

  const [projects, setProjects] = useState([]);

  const { isLoading, error, sendRequest: fetchProjects } = useHttp();
  useEffect(() => {
    const transformProjects = (projectsObj) => {
      const loadedProjects = [];

      for (const Key in projectsObj) {
        loadedProjects.push({ id: Key, project: projectsObj[Key] });
      }

      setProjects(loadedProjects);
    };

    fetchProjects(
      {
        url: "https://react-demos-f9e0a-default-rtdb.firebaseio.com/projects.json",
      },
      transformProjects
    );
  }, [fetchProjects]);
  const projectAddHandler = (project) => {
    console.log("new project:       " + JSON.stringify(project));
    setProjects((prevTProjects) => prevTProjects.concat(project));
  };

  return (
    <>
      <h1>Forward counting:</h1>
      <h3>{counterForward}</h3>
      <h1>Backward counting:</h1>
      <h3>{counterBackward}</h3>
      <h1>HTTP Request hook:</h1>
      <section className="mt-5">
        <NewProject onAddProject={projectAddHandler} />
      </section>
      <section className="pt-5 pb-5">
        <Projects
          items={projects}
          loading={isLoading}
          error={error}
          onFetch={fetchProjects}
        />
      </section>
    </>
  );
};
export default CustomHooks;
