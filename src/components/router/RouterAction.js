import { json, redirect } from "react-router-dom";
import ProjectForm from "./ProjectForm";

const RouterAction = () => {
  return <ProjectForm />;
};

export default RouterAction;

export async function routerActionFn({ request, params }) {
  const data = await request.formData();

  const project = {
    title: data.get("title"),
    image: data.get("image"),
    descrition: data.get("description"),
    date: data.get("date"),
  };

  const response = await fetch(
    "https://react-demos-f9e0a-default-rtdb.firebaseio.com/projects.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/http/http-requests");
}
