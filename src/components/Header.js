import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icon.png";
import { useContext, useState } from "react";
import AuthContext from "../store/auth-context";
import classes from "./Header.module.css";
import OrdersContext from "../store/orders-context";
import NewsletterSignup from "./router/NewsletterSignup";
const Header = () => {
  const ctx = useContext(AuthContext);
  const ordersCtx = useContext(OrdersContext);

  const HandleOpen = () => {
    ordersCtx.onOpen();
  };

  return (
    <>
      <div
        className="jumbotron text-center"
        style={{
          marginBottom: "0px",
        }}
      >
        <h1>
          <span
            style={{
              color: "blue",
            }}
          >
            {" "}
            SBSA{" "}
          </span>{" "}
          React recap
        </h1>
        <p>React recap, Each link has a different section!</p>
      </div>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="SBSA Solutions"></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="/hooks"
                role="button"
                aria-expanded="false"
              >
                React Hooks
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/hooks/custom-hooks">
                  Custom hooks
                </NavLink>
                <NavLink className="dropdown-item" to="/hooks/effects">
                  Effects
                </NavLink>
                <NavLink className="dropdown-item" to="/hooks/reducer">
                  Reducer
                </NavLink>
                <NavLink className="dropdown-item" to="/hooks/states">
                  States
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/hooks/context">
                  Context API
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="/router"
              >
                Router
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="/events"
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="/form"
              >
                Form
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="/FragPortRefs"
              >
                Frag,Port & Refs{" "}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="/newsletter"
              >
                News Letter
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="/http"
                end
              >
                Http Requests{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="/projects"
              >
                Projects{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) => getNavigationClasses(navData.isActive)}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-row justify-content-between ml-auto ">
            {ordersCtx.items.length > 0 && (
              <li className="nav-item order-2 order-md-1">
                <Link onClick={HandleOpen} className="nav-link" title="Orders">
                  <i className="fa fa-shopping-cart fa-fw fa-lg"></i>
                  <span className="badge badge-light">
                    {ordersCtx.items.length}
                  </span>
                </Link>
              </li>
            )}

            <li className="dropdown order-1">
              {!ctx.isLoggedIn && (
                <button type="button" className="btn btn-outline-secondary">
                  <i className="fa fa-sign-in"></i> Login{" "}
                </button>
              )}
              {ctx.isLoggedIn && (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={ctx.onLogout}
                >
                  <i className="fa fa-sign-in"></i> LogOut {ctx.isLoggedIn}
                </button>
              )}
            </li>
          </ul>
          <NewsletterSignup />
        </div>
      </nav>
    </>
  );
};
const getNavigationClasses = (isActive) => {
  return isActive ? "nav-link active" : "nav-link";
};
export default Header;
