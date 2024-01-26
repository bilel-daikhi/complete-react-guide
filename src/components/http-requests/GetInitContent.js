import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetInitContent=()=>{
    const [universities, setUniversities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchUniversitiesHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('http://universities.hipolabs.com/search?country=Tunisia');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const data = await response.json();
  
        const transformedUniversities = data.map((movieData) => {
          return {
            name: movieData.name, 
            domains: movieData.domains,
            website: movieData.web_pages
          };
        });
        setUniversities(transformedUniversities);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }, []);
  
    useEffect(() => {
      fetchUniversitiesHandler();
    }, [fetchUniversitiesHandler]);
  
    let content = <p>Found no movies.</p>;
  
    if (universities.length > 0) {
      content = universities.map(university=>{
      return (<div className="card-deck">
      <div className="card"> 
        <div className="card-body">
          <h5 className="card-title">{university.name}</h5>
          <p className="card-text">{university.domains[0]}</p>
          <Link target="_blank" to={university.website[0]} className="card-text"><small className="text-muted">{university.website[0]}</small></Link>
        </div>
      </div>
    
    </div>)
    });
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
          <button className="btn btn-primary" onClick={fetchUniversitiesHandler}>Fetch Tunisian universities</button>
        </section>
        <section>{content}</section>
      </React.Fragment>
    );
  }
   
export default GetInitContent;