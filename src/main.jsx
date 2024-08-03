import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home-page";
import Aboutus from "./pages/About_us";
import Events from "./pages/events";
import Projects from "./pages/projects";
import Teams from "./pages/teams";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <Aboutus />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
