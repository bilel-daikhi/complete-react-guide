import React from "react";
import classes from "./Contact.module.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <React.Fragment>
      <section id="contact">
        <div className="container">
          <h3
            className="text-center text-uppercase"
            style={{ color: "#002aff" }}
          >
            contact us
          </h3>
          <p className="text-center w-75 m-auto">
            This hands-on exploration will guide you through the core features
            of React, including state management, routing, hooks, and others.
          </p>
          <p className="text-center w-75 m-auto">
            This project offers a brief yet impactful journey into the heart of
            React's capabilities.
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i className="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">call us</h4>
                  <p>+21622605020</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i
                    className="fa fa-map-marker fa-5x mb-3"
                    aria-hidden="true"
                  ></i>
                  <h4 className="text-uppercase mb-5">Location</h4>
                  <address>Tunis,Tunisia </address>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i
                    className="fa fa fa-linkedin fa-5x mb-3"
                    aria-hidden="true"
                  ></i>
                  <h4 className="text-uppercase mb-5"> LinkedIn</h4>
                  <Link
                    to="https://www.linkedin.com/in/bilel-daikhi"
                    target="_blank"
                  >
                    Go to My LinkedIn{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i
                    className="fa fa-envelope-o fa-5x mb-3"
                    aria-hidden="true"
                  ></i>
                  <h4 className="text-uppercase mb-5">email</h4>
                  <p>bilel.daikhi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Contact;
