import { NavLink, Outlet } from "react-router-dom";

const Hooks = () => {
  const getNavigationClasses = (isActive) => {
    return isActive ? "nav-link active" : "nav-link";
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <h2>React Hooks</h2>

          <p>
            Hooks allow function components to have access to state and other
            React features.
          </p>
          <h3>Links: </h3>

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="custom-hooks"
              >
                Custom Hooks{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="context"
              >
                API Context{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="effects"
              >
                Effects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="reducer"
              >
                Reducer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="states"
              >
                States
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
export default Hooks;
