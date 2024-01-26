import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";

import "bootstrap";
import States from "./components/hooks/states/States";
import Events from "./components/events/Events";
import FragPortRefs from "./components/FragPortRefs";

import Projects from "./components/projects/projects";
import SBSAOrders from "./components/projects/orders/SBSAOrders";
import ReactHttp from "./components/http-requests/ReactHttp";
import GetRequests from "./components/http-requests/GetRequests";
import HttpRequests from "./components/http-requests/HttpRequests";
import GetInitContent from "./components/http-requests/GetInitContent";
import Contact from "./components/Contact";
import Hooks from "./components/hooks/Hooks";
import CustomHooks from "./components/hooks/customHooks/CustomHooks";
import Form from "./components/form/Form";
import FormUsingCustomHook from "./components/form/FormUsingCustomHook";
import FormUsingState from "./components/form/FormUsingState";
import FormUsingCustomHookAndReducer from "./components/form/FormUsingCustomHookReducer";
import ErrorPage from "./components/Error";
import Router from "./components/router/Router";
import ProgrammaticNavigation from "./components/router/ProgrammaticNavigation";
import DetailsPage from "./components/router/DetailsPage";
import RouteLoader, { factsLoader } from "./components/router/RouteLoader";
import RouterAction, { routerActionFn } from "./components/router/RouterAction";
import NewsletterPage, {
  newsletterAction,
} from "./components/router/Newsletter";
import SideEffects from "./components/hooks/SideEffects";
import LoginReducer from "./components/hooks/LoginReducer";
import APIContext from "./components/hooks/APIContext";
import ReactEvents from "./components/events/ReactEvents";
/* Alternative route definition */
/*const routeDefinitions = createRoutesFromElements(
  <Route path="/" errorElement={<ErrorPage />} element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/context&Effects" element={<ContextEffects />}>
      <Route index element={<Navigate to="/context&Effects/context" />} />
      <Route path="context" element={<APIContext />} />{" "}
      <Route path="effects" element={<SideEffects />} />{" "}
      <Route path="reducer" element={<LoginReducer />} />{" "}
    </Route>
    <Route path="/events&States" element={<EventsAndStates />}>
      <Route index element={<Navigate to="/events&States/events" />} />
      <Route path="events" element={<Events />} />
      <Route path="states" element={<States />} />
    </Route>
    <Route path="/form" element={<Form />}>
      <Route
        index
        path="/form"
        element={<Navigate to="/form/form-state" />}
      ></Route>
      <Route path="form-customhook" element={<FormUsingCustomHook />}></Route>
      <Route
        path="form-customhook-reducer"
        element={<FormUsingCustomHookAndReducer />}
      ></Route>
      <Route path="form-state" element={<FormUsingState />}></Route>
    </Route>
    <Route path="/FragPortRefs" element={<FragPortRefs />} />
    <Route path="/http" element={<Http />}>
      <Route index element={<Navigate to="/http/get-requests" />} />
      <Route path="get-requests" element={<GetRequests />} />
      <Route path="init-data" element={<GetInitContent />} />
      <Route path="http-requests" element={<HttpRequests />} />
    </Route>
    <Route path="/projects" element={<Projects />}>
      <Route index element={<Navigate to={"/projects/sbsa-orders"} />} />
      <Route path="sbsa-orders" element={<SBSAOrders />} />
    </Route>

    <Route path="/hooks" element={<Hooks />}>
      <Route index element={<Navigate to={"/hooks/custom-hooks"} />} />
      <Route path="custom-hooks" element={<CustomHooks />} />
    </Route>
    <Route path="contact" element={<Contact />}></Route>

    <Route path="*" element={<NoPage />} />
  </Route>
);*/
//const router = createBrowserRouter(routeDefinitions);

/* route definition */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", errorElement: <ErrorPage />, element: <Home /> },
      { index: true, element: <Home /> },

      {
        path: "/events",
        element: <ReactEvents />,
        children: [
          { index: true, element: <Navigate to="/events/events" /> },
          { path: "events", element: <Events /> },
        ],
      },

      {
        path: "/form",
        element: <Form />,
        children: [
          {
            index: true,
            path: "/form",
            element: <Navigate to="/form/form-state" />,
          },

          { path: "form-customhook", element: <FormUsingCustomHook /> },
          {
            path: "form-customhook-reducer",
            element: <FormUsingCustomHookAndReducer />,
          },

          { path: "form-state", element: <FormUsingState /> },
        ],
      },
      { path: "/FragPortRefs", element: <FragPortRefs /> },
      {
        path: "/http",
        element: <ReactHttp />,
        children: [
          { index: true, element: <Navigate to="/http/get-requests" /> },
          { path: "get-requests", element: <GetRequests /> },
          { path: "init-data", element: <GetInitContent /> },
          { path: "http-requests", element: <HttpRequests /> },
        ],
      },
      {
        path: "/projects",
        element: <Projects />,
        children: [
          { index: true, element: <Navigate to={"/projects/sbsa-orders"} /> },
          { path: "sbsa-orders", element: <SBSAOrders /> },
        ],
      },
      {
        path: "router",
        element: <Router />,
        children: [
          {
            index: true,
            element: <Navigate to={"/router/programmatic-navigation"} />,
          },
          {
            path: "programmatic-navigation",
            element: <ProgrammaticNavigation />,
          },
          {
            path: "route-louder",
            element: <RouteLoader />,
            loader: factsLoader,
            /*  loader: async () => {
              const response = await fetch("https://catfact.ninja/facts");

              if (!response.ok) {
                // ...
              } else {
                const resData = await response.json();
                return resData.data;
              }
            },*/
          },
          {
            path: "details-page/:productId",
            element: <DetailsPage />,
          },
          {
            path: "route-action",
            element: <RouterAction />,
            action: routerActionFn,
          },
        ],
      },
      {
        path: "/hooks",
        element: <Hooks />,
        children: [
          { index: true, element: <Navigate to={"/hooks/custom-hooks"} /> },
          { path: "custom-hooks", element: <CustomHooks /> },
          { path: "states", element: <States /> },
          { path: "effects", element: <SideEffects /> },
          { path: "reducer", element: <LoginReducer /> },
          { path: "context", element: <APIContext /> },
        ],
      },
      { path: "contact", element: <Contact /> },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },

      { path: "*", element: <NoPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
