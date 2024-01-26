import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Header />
      <div className="container" style={{ minHeight: "500px" }}>
        <div class="mx-auto">
          <h1>{title}</h1>
          <p>{message}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
