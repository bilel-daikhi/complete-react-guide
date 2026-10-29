import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="jumbotron text-center"
      style={{
        marginBottom: "0",
      }}
    >
      <p>
        <i className="fa fa-copyright" aria-hidden="true"></i> Copyright 2023{" "}
        <Link
          to="https://bilel-daikhi-portfolio.web.app/landing"
          target="_blank"
        >
          {" "}
          Bilel Daikhi.
        </Link>{" "}
      </p>
      <h2 className="footer">Bilel Daikhi Contact.</h2>
      <br />
      <Link
        to="https://bilel-daikhi-portfolio.web.app/landing"
        target="_blank"
        className="mr-2"
      >
        <i className="fa fa-external-link-square fa-3x social"></i>
      </Link>
      <Link to="https://www.linkedin.com/in/bilel-daikhi" target="_blank">
        <i className="fa fa-linkedin-square fa-3x social"></i>
      </Link>
    </div>
  );
};
export default Footer;
