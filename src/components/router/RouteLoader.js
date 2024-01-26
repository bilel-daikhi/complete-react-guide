import { useLoaderData } from "react-router-dom";

const RouteLoader = () => {
  const facts = useLoaderData();
  return (
    <>
      <div className="container">
        <h1>All Facts</h1>
        <ul className="list-group">
          {facts.map((item) => (
            <li key={item.length} className="list-group-item">
              {item.fact}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RouteLoader;

export async function factsLoader() {
  const response = await fetch("https://catfact.ninja/facts");

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json();
    return resData.data;
  }
}
