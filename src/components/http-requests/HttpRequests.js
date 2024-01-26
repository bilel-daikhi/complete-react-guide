import React, { useCallback, useEffect, useState } from "react";
import AddProject from "./AddProject"; 
import Project from "./Project";

const HttpRequests=()=>{ 
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchProjectsHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://react-demos-f9e0a-default-rtdb.firebaseio.com/projects.json');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const data = await response.json();
  
        const loadedProjects = [];
  
        for (const key in data) {
          loadedProjects.push({
            id: key,
            image:data[key].image,
            title: data[key].title,
            description: data[key].description,
            date: data[key].date,
          });
        }
  
        setProjects(loadedProjects);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }, []);
  
    useEffect(() => {
      fetchProjectsHandler();
    }, [fetchProjectsHandler]);
  
    async function addProjectHandler(movie) {
      const response = await fetch('https://react-demos-f9e0a-default-rtdb.firebaseio.com/projects.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    }
  
    let content = <p>Found no projects.</p>;
  if(projects.length > 0){
    content= projects.map((project) => (
      <Project
        key={project.id}
        image={project.image}
        title={project.title}
        date={project.date}
        description={project.description}
      />
    ))
  }
  
    if (error) {
      content = <p>{error}</p>;
    }
  
    if (isLoading) {
      content = <p>Loading...</p>;
    }
  
    return (
      <React.Fragment>
        <section>
          <AddProject onAddProject={addProjectHandler} />
        </section>
        <section>
          <button className="btn btn-primary btn-lg btn-block mt-5 mb-5" onClick={fetchProjectsHandler}>Fetch Projects</button>
        </section>
        <section className="pt-5 pb-5">
  <div className="container">
    <div className="row mb-md-2">
     
         {content}
        
        
     
    </div>
   
    
</div>
</section>
      </React.Fragment>
    );
  }
export default HttpRequests;