import Layout from "/src/layout/pages_layout.jsx"
import "/src/Css/projects.css"
import React, {useRef} from "react";
function Projects() {
  const displayProjects = useRef(null);
  // const displaybutton = useRef(null);

  const Dita_Projects = [
    {
      project_name:"Project 1",
      project_id:"P001",
      type_of_project:"Web Development",
      project_description:"This is a description of project 1",
      duration:"2 weeks",
      languages_used:"HTML, CSS, JavaScript",
      team_members: ["John", "Jane", "Bob"],
      project_link:"https://github.com"
    },
    {
      project_name:"Project 2",
      project_id:"P002",
      type_of_project:"Web Development",
      project_description:"This is a description of project 2",
      duration:"2 weeks",
      languages_used:"HTML, CSS, JavaScript",
      team_members: ["John", "Jane", "Bob"],
      project_link:"https://github.com"
    },
    {
      project_name:"Project 3",
      project_id:"P003",
      type_of_project:"app Development",
      project_description:"This is a description of project 3",
      duration:"2 weeks",
      languages_used:"Flutter, Dart",
      team_members: ["John", "Jane", "Bob"],
      project_link:"https://github.com"
    },
    {
      project_name:"Project 4",
      project_id:"P004",
      type_of_project:"app Development",
      project_description:"This is a description of project 4",
      duration:"2 weeks",
      languages_used:"Flutter, Dart",
      team_members: ["John", "Jane", "Bob"],
      project_link:"https://github.com"
    },
    {
      project_name:"Project 5",
      project_id:"P005",
      type_of_project:"Web Development",
      project_description:"This is a description of project 5",
      duration:"2 weeks",
      languages_used:"HTML, CSS, JavaScript",
      team_members: ["John", "Jane", "Bob"],
      project_link:"https://github.com"
    },
    {
      project_name:"Project 6",
      project_id:"P006",
      type_of_project:"Web Development",
      project_description:"This is a description of project 6",
      duration:"2 weeks",
      languages_used:"HTML, CSS, JavaScript",
      team_members: ["John", "Jane", "Bob"],
      project_link:"https://github.com"
    }
  ]

  function showProjects()
  {
    console.log("hello");
    displayProjects.current.innerHTML = "";
    for (let i = 0; i <= Dita_Projects.length ; i++) {
      displayProjects.current.innerHTML += `
             <div className="project" style="text-align:left; font-size: 20px; padding: 20px; margin-top: 70px; border: 1px solid black; border-radius: 50px; box-shadow: 5px 5px 5px black;">
              <h2 >
              <strong style="font-family: 'Helvetica', sans-serif;">Project Name</strong>: ${Dita_Projects[i].project_name}
              </h2>
              <hr/>
              <p style="font-family: 'Helvetica', sans-serif;">
              <strong>Project ID</strong>: ${Dita_Projects[i].project_id}</p>
              <p style="font-family: 'Helvetica', sans-serif;">
              <strong>Type of Project</strong>: ${Dita_Projects[i].type_of_project}</p>
              <p style="font-family: 'Helvetica', sans-serif;">
              <strong>Project Description</strong>: ${Dita_Projects[i].project_description}</p>
              <p style="font-family: 'Helvetica', sans-serif;">
              <strong>Duration</strong>: ${Dita_Projects[i].duration}</p>
              <p style="font-family: 'Helvetica', sans-serif;">
              <strong>Languages used</strong>: ${Dita_Projects[i].languages_used}</p>
              <p style="font-family: 'Helvetica', sans-serif;">
              <strong>Team Members</strong>: ${Dita_Projects[i].team_members}</p>
              <a href="${Dita_Projects[i].project_link}" style="font-family: 'Helvetica', sans-serif;">Click here to see the project</a>
            </div>
      `;
    }
  }

  return (
    <Layout>
    <div id="projects">
      {/* Make a general css for this */}
      <h1 className="Event__page_title">Explore Our Projects</h1>
      <hr/>
      <div className="projects_content" ref={displayProjects}>
        <button className="project_btn" onClick={() => showProjects()}>All Projects</button>
      </div>
    </div>
    </Layout>
  );
}

export default Projects;