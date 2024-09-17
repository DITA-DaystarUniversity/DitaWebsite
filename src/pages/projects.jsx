import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/projects.css";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function projects() {
  const displayProjects = useRef(null);
  const displayProject = useRef(null);
  const navigate = useNavigate();

  const Dita_Projects = [
    {
      name: "Project 1",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      description: "This is a description of project 1 nnjnsjd kjdnids kmcosd",
      link: "https://www.google.com",
      github: "https://www.github.com",
    },
    {
      name: "Project 2",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      description: "This is a description of project 2",
      link: "https://www.google.com",
      github: "https://www.github.com",
    },
    {
      name: "Project 3",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      description: "This is a description of project 3",
      link: "https://www.google.com",
      github: "https://www.github.com",
    },
    {
      name: "Project 4",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      description: "This is a description of project 4",
      link: "https://www.google.com",
      github: "https://www.github.com",
    },
    {
      name: "Project 5",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      description: "This is a description of project 5",
      link: "https://www.google.com",
      github: "https://www.github.com",
    },
  ];

  function getProjects(i) {
    const name = Dita_Projects[i].name;
    const img = Dita_Projects[i].img;
    const description = Dita_Projects[i].description;
    const link = Dita_Projects[i].link;
    const github = Dita_Projects[i].github;
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

  useEffect(() => {
    function showProjects() {
      // displayProjects.current.innerHTML = "";
      for (let i = 0; i < Dita_Projects.length; i++) {
        const { name, img, description } = getProjects(i);
        const color = randomColor();
        displayProjects.current.innerHTML += `
        <div id=${i} class="project" style="width: 500px; min-width: 300px; height: 500px; display: flex; flex-direction: column; background: ${color}; margin: 10px; align-items: center;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding-top: 20px; cursor: pointer">
          <h2 id=${i} style="text-align: center; font-family: 'Helvetica', sans-serif; font-size: 24px">${name}</h2>
          <img id=${i} src=${img} style="width: 70%; height: 70%; min-width: 200px; margin-left: auto; margin-right: auto" />
          <div id=${i} style="text-align: center; text-wrap: wrap; margin-top: 20px">${description}</div>
        </div>
        `;
      }
    }
    showProjects();
  }, []);

  return (
    <Layout>
      <div id="projects" ref={displayProject}>
        {/* Make a general css for this */}
        <h1 className="Event__page_title">Explore Our Projects</h1>
        <hr />
        <div className="projects_content" ref={displayProjects}></div>
      </div>
    </Layout>
  );
}

export default projects;
