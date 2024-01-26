import { NavLink, Outlet } from "react-router-dom";

function ReactEvents() {
  const getNavigationClasses = (isActive) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <h2>React Events</h2>
          <p>
            Just like HTML DOM events, React can perform actions based on user
            events.
          </p>

          <p>
            React has the same events as HTML: click, change, mouseover etc...
          </p>
          <h3>Links: </h3>

          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="events"
              >
                Events
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
}
export default ReactEvents;
