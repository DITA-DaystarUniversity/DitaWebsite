import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/projects.css";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

function projects() {
  const displayProjects = useRef(null);
  const displayProject = useRef(null);
  const navigate = useNavigate();
  const [Projects , setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


  function getProjects(i) {
    const name = Projects[i].projectName;
    const img = Projects[i].projectImage;
    const description = Projects[i].projectDetailedDescription;
    const link = Projects[i].projectLink;
    const github = Projects[i].projectGithub;
    return { name, img, description, link, github };
  }

  function randomColor() {
    const red = Math.floor(Math.random() * 49) + 207;
    const green = Math.floor(Math.random() * 49) + 207;
    const blue = Math.floor(Math.random() * 49) + 207;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    console.log("Text content:", clickedElement.id);
    showSingleProject(clickedElement.id);
  });

  function showSingleProject(i) {
    // console.log(i);
    const { name, img, description, link, github } = getProjects(i);
    navigate("/singleProject/", {
      state: { name, img, description, link, github },
    });
  }


  function fetchJson() {
    fetch("http://localhost:3000/api/v1/projects")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // 
        setProjects(data)  // Set the state
        setLoading(false)
      })
      .catch((error) => {
        console.log(error); // Handle any errors
      });
  }
  


  useEffect(() => {
    fetchJson();

  }, []);

  return (
    <Layout>
      {loading ? <PropagateLoader
        color="#02133e"
        loading={loading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> :
      <div id="projects" ref={displayProject}>
        {/* Make a general css for this */}
        <h1 className="Event__page_title">Explore Our Projects</h1>
        <hr />
        <div className="projects_content" ref={displayProjects}>
          { Projects.map((project, index) => 
            {
              const { name, img, description, link, github } = project;
              const color = randomColor();
              return (
                <div id={index} className="project" style={{ width: "500px", minWidth: "300px", height: "500px", display: "flex", flexDirection: "column", background: color, margin: "10px", alignItems: "center", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", paddingTop: "20px", cursor: "pointer" }}>
                  <h2 id={index} style={{ textAlign: "center", fontFamily: "'Helvetica', sans-serif", fontSize: "24px" }}>{project.projectName}</h2>
                  <img id={index} src={project.projectImage} style={{ width: "70%", height: "70%", minWidth: "200px", marginLeft: "auto", marginRight: "auto" }} />
                  <div id={index} style={{ textAlign: "center", textWrap: "wrap", marginTop: "20px" }}>{project.projectSmallDescription}</div>
                </div>
              );
            })}
        </div>
      </div>}
    </Layout>
  );
}

export default projects;
