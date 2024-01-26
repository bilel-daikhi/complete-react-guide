import NewsletterSignup from "./NewsletterSignup";

function NewsletterPage() {
  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-center mb-5">
        <NewsletterSignup />
      </div>
      <p className="lead">
        This component uses useFetcher hook of React Router, that lets you plug
        your UI into your actions and loaders without navigating.
      </p>
      <p className="lead">
        The useFetcher hook handles fetch cancellation, prioritizes submission
        actions, automatically revalidates data, manages concurrent fetches,
        handles errors, and supports app redirection based on action/loader
        redirects.
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span class="badge badge-primary">fetcher.Form:</span> Similar to the
          Form component but without causing navigation.
        </li>
        <li className="list-group-item">
          <span class="badge badge-primary">fetcher.state:</span> Represents the
          state of the fetcher (idle, submitting, loading).
        </li>
      </ul>
    </div>
  );
}

export default NewsletterPage;

export async function newsletterAction({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: email + " Signup successful!" };
}
