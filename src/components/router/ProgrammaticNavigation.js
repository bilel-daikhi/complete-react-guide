import { Link, useNavigate } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProgrammaticNavigation = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/");
  }
  return (
    <>
      <h1>Navigate</h1>
      <div className="row">
        <button className="btn btn-primary mr-4" onClick={navigateHandler}>
          {" "}
          Go to Home
        </button>
      </div>

      <h1>All Products</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/router/details-page/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProgrammaticNavigation;
