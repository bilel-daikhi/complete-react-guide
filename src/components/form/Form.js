import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Form = () => {
  const getNavigationClasses = (isActive) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <h2>React Forms</h2>

          <p>Forms play an essential role in modern web applications.</p>
          <p>
            They enable users to share information, complete tasks and provide
            feedback.
          </p>
          <h3>Links:</h3>

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="form-state"
              >
                Using ref & states{" "}
              </NavLink>
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="form-customhook"
              >
                Using Custom hook
              </NavLink>
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="form-customhook-reducer"
              >
                Using Custom hook with reducer
              </NavLink>
            </li>
          </ul>
          <hr className="d-sm-none"></hr>
        </div>
        <div className="col-sm-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Form;
