import { NavLink, Outlet } from "react-router-dom";

const Router = () => {
  const getNavigationClasses = (isActive) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <h2>React DOM Router</h2>

          <p>
            {" "}
            the React DOM Router enables routing support in React and navigation
            to different components in multi-page applications.{" "}
          </p>
          <p>
            It renders components for corresponding routes and assigned URLs.
          </p>
          <h3>Links:</h3>

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="programmatic-navigation"
              >
                Programmatic navigation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="route-louder"
              >
                Route Loader
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="route-action"
              >
                Route with action
              </NavLink>
            </li>
          </ul>
          <hr className="d-sm-none"></hr>
        </div>
        <div className="col-sm-9">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Router;
