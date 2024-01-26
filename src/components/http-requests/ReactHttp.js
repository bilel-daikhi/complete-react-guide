import { NavLink, Outlet } from "react-router-dom";

const ReactHttp = () => {
  const getNavigationClasses = (isActive) => {
    return isActive ? "nav-link active" : "nav-link";
  };
  return (
    <div className="row">
      <div className="col-sm-3">
        <h2>Http requests </h2>

        <p>
          An API call in React refers to making a request to a web API from a
          React application.{" "}
        </p>
        <p>We can make an API call with: XMLHttpRequest, Fetch API or Axios.</p>
        <h3>Links:</h3>

        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink
              className={(navData) => getNavigationClasses(navData.isActive)}
              to="get-requests"
            >
              Get Requests{" "}
            </NavLink>
            <NavLink
              className={(navData) => getNavigationClasses(navData.isActive)}
              to="init-data"
            >
              Get Requests (Initiate Get Request){" "}
            </NavLink>
            <NavLink
              className={(navData) => getNavigationClasses(navData.isActive)}
              to="http-requests"
            >
              Http Requests (Get,Post...){" "}
            </NavLink>
          </li>
        </ul>
        <hr className="d-sm-none"></hr>
      </div>
      <div className="col-sm-9">
        <Outlet />
      </div>
    </div>
  );
};
export default ReactHttp;
