import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/projects.css";
import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

function projects() {
  const navigate = useNavigate();
  const [Projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  function getProjects(i) {
    if(Projects)
      {
        const name = Projects[i].projectName;
        const img = Projects[i].projectImage;
        const description = Projects[i].projectDetailedDescription;
        const link = Projects[i].projectLink;
        const github = Projects[i].projectGithub;
        return { name, img, description, link, github };
      }
  }

  function randomColor() {
    const red = Math.floor(Math.random() * 49) + 207;
    const green = Math.floor(Math.random() * 49) + 207;
    const blue = Math.floor(Math.random() * 49) + 207;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  document.addEventListener("click", (event) => {
    const clickedElement = event.target; // or event.currentTarget
    const parts = String(clickedElement.id).split("Project");
    const element = parts.length > 1 ? parts[1] : null;
    if(element !== null)
      {
        showSingleProject(element);
      }
  });

  function showSingleProject(i) {
    const { name, img, description, link, github } = getProjects(i);
    navigate("/singleProject/", {
      state: { name, img, description, link, github },
    });
  }

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/projects")
    .then((response) => response.json())
    .then((data) => {
      setProjects(data); // Set the state
      setLoading(false);
    })
    .catch((error) => {
      console.log(error); // Handle any errors
    });
  }, []);

  return (
    <Layout>
      {loading ? (
        <PropagateLoader
          color="#02133e"
          loading={loading}
          cssOverride={{
            position: "fixed",
            top: "50%",
            left: "45%",
            transform: "translate(-50%, -50%)",
          }}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div id="projects">
          {/* Make a general css for this */}
          <h1 className="Event__page_title">Explore Our Projects</h1>
          <hr />
          <div className="projects_content">
            {Projects.map((project, index) => {
              const { name, img, description, link, github } = project;
              const color = randomColor();
              return (
                <div
                key={"Project" + index} id={`Project${index}`}
                  className="project"
                  style={{
                    width: "500px",
                    minWidth: "300px",
                    height: "500px",
                    display: "flex",
                    flexDirection: "column",
                    background: color,
                    margin: "10px",
                    alignItems: "center",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    paddingTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  <h2
                id={`Project${index}`}
                    style={{
                      textAlign: "center",
                      fontFamily: "roboto, sans-serif",
                      fontSize: "24px",
                    }}
                  >
                    {project.projectName}
                  </h2>
                  <img
                 id={`Project${index}`}
                    src={`/Images/Projects/${project.projectImage}`}
                    style={{
                      width: "70%",
                      height: "70%",
                      minWidth: "200px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <div
                id={`Project${index}`}
                    style={{
                      marginTop: "20px",
                      textAlign: "center",
                      textWrap: "wrap",
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                      maxWidth: "90%",
                    }}
                  >
                    {project.projectSmallDescription}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default projects;
