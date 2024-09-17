import Layout from "/src/layout/homepage_layout.jsx";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "/src/Css/technical_writing.css";
import PropagateLoader from "react-spinners/PropagateLoader";
function technicalWriting() {
  const displayWriting = useRef(null);
  const EventsPage = useRef(null);
  const width = window.innerWidth;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  

  const ditaWriting = [
    {
      name: "Writer Name 1",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      topic: "Cloud Storage Redundancy",
      description:
        "Cloud storage systems typically employ a sophisticated architecture to ensure data durability and availability. Redundancy is a cornerstone of this architecture. Data is replicated across multiple storage nodes within a data centre, and often across different geographic locations. This approach mitigates the risk of data loss due to hardware failures, natural disasters, or other unforeseen events..",
    },
    {
      name: "Writer Name 2",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      topic: "Zero-Trust Architecture",
      description:
        "Zero-trust security models operate on the principle of “never trust, always verify”. Unlike traditional network security that trusts users once they are inside the network perimeter, zero trust assumes a breach has already occurred. It requires strict identity verification and authorization for every user and device, regardless of location. Multi-factor authentication, continuous monitoring, and least privilege access are key components of this approach.........",
    },
    {
      name: "Writer Name 3",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      topic: "Agile Methodology",
      description:
        "Agile is an iterative approach to software development that emphasizes flexibility and collaboration. It involves breaking down a project into smaller, manageable increments called sprints. Agile teams work closely together, frequently adapting to changes in requirements and priorities. This methodology promotes faster time-to-market, improved product quality, and increased customer satisfaction.",
    },
    {
      name: "Writer Name 4",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      topic: "Machine Learning Model Evaluation",
      description:
        "Model evaluation is a critical step in the machine learning pipeline. It involves assessing the performance of a trained model on a separate dataset. Key metrics such as accuracy, precision, recall, and F1-score are used to evaluate classification models. Regression models are often assessed using metrics like mean squared error (MSE) and root mean squared error (RMSE). Proper model evaluation helps identify potential biases, overfitting, and under-fitting issues......",
    },
    {
      name: "Writer Name 5",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      topic: "Topic title",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nsanfewik nkcsiajcdi kjciwefn wf weifn sdcniwecn wfcneiwfnc efcniewf jvndjivniaeru djnieucn veruivnieruv inovrenv jonvevn orevnore ivnervun verorguer fvneorgne veovnreao foniveri sognrnvrino efvmergvln edvnierw esogrjnerg",
    },
  ];

  function getWritings(i) {
    const name = ditaWriting[i].name;
    const img = ditaWriting[i].img;
    const description = ditaWriting[i].description;
    const topic = ditaWriting[i].topic;
    const github = ditaWriting[i].github;
    return { name, img, description, topic };
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
    showSingleWriting(clickedElement.id);
  });

 async function showSingleWriting(i) {
    console.log(i);
    const { name, img, description, topic } = getWritings(i);
    const backgroundImage = await randomImage(width);
    navigate("/singleWriting", { state: { name, img, description, topic, backgroundImage } });
  }

  async function randomImage(width) 
  {
      const image = await fetch(`https://random.imagecdn.app/${width}/500`);
    return image.url
  }

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      showWritings();
      setLoading(false);
    }, 3000);

  }, []);


  async function showWritings() {

    // displayProjects.current.innerHTML = "";
    for (let i = 0; i < ditaWriting.length; i++) {
      const { name, img, description, topic } = getWritings(i);
      const color = randomColor();
      const backgroundImage = await randomImage(width);
      displayWriting.current.innerHTML += `
      <div class="technical" style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),url(${backgroundImage});repeat: no-repeat; ">
        <img src=${img} />
        <h2 >${name}</h2>
        <h2 class="topic">${topic}</h2>
        <p >${description}</p>
        <button id="${i}">Continue Reading</button>
      </div>
      `;
    }
  }

  return (
    <Layout>
      <div>
      {loading ? <PropagateLoader
        color="#02133e"
        loading={loading}
        cssOverride={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> :
      <div id="technical_writing" ref={EventsPage}>
        <h1 className="writing_title" >Technical Writing</h1>
        <hr className="writing_hr" />
        <div className="technical_writing_content" ref={displayWriting}>
        </div>
      </div>
      }
      </div>
    </Layout>
  );
}

export default technicalWriting;
