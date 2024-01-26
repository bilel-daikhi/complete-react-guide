import { useState } from "react";
import defaultImage from "../../assets/default.jpg";
const GetRequests = () => {
  const [dog, setDog] = useState(defaultImage);
  const fetchDogHandler = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDog(data.message);
      });
  };

  // fetch with loader
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCatFactsHandler() {
    setIsLoading(true);
    const response = await fetch("https://catfact.ninja/facts");
    const data = await response.json();

    const transformedFacts = data.data.map((factData) => {
      return {
        fact: factData.fact,
      };
    });
    setFacts(transformedFacts);
    setIsLoading(false);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={dog} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Do you want this dog?</h5>
            <p className="card-text">Press button to fetch new dog!</p>
            <a onClick={fetchDogHandler} className="btn btn-primary">
              Fetch new dog
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-lg btn-block mt-5 mb-5"
        onClick={fetchCatFactsHandler}
      >
        Fetch cat Facts with loading indicator
      </button>

      {isLoading && (
        <div className="d-flex justify-content-center mb-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="card-deck mb-5">
          {facts.slice(0, 3).map((item) => {
            return (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Do you know ?</h5>
                  <p className="card-text">{item.fact}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default GetRequests;
