import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      //send data to server
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form method="post" className="form-inline" action="/newsletter">
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control ml-2"
          placeholder="Sign up for newsletter..."
          aria-label="Sign up for newsletter"
        />
      </div>
      <button className="btn btn-outline-primary my-2 my-sm-0 ml-2">
        Sign up
      </button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
