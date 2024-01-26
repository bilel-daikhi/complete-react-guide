import { NavLink, Outlet } from "react-router-dom";

const Projects = () => {
  const getNavigationClasses = (isActive) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <h2>React Projects</h2>

          <p>
            I have put together different projects that will not only show
            what's possible to make with React, but practice different react
            features.
          </p>
          <h3>Links: </h3>

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="sbsa-orders"
              >
                Products Orders{" "}
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
export default Projects;
