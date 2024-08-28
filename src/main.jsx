import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home-page";
import Aboutus from "./pages/About_us";
import Events from "./pages/events";
import Projects from "./pages/projects";
import Members from "./pages/members";
import Achievements from "./pages/achievements";
import TechnicalWriting from "./pages/technical_writing";
import Hackathon from "./pages/hackathon";
import Project from "./pages/projects"; 
import Awards from "./pages/awards";

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
    path: "/members",
    element: <Members />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
  },
  {
    path: "/technicalWriting",
    element: <TechnicalWriting />,
  },
  {
    path: "/hackathon",
    element: <Hackathon />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/awards",
    element: <Awards />,
  },  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
