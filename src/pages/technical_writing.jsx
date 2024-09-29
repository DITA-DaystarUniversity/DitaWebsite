import Layout from "/src/layout/homepage_layout.jsx";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "/src/Css/technical_writing.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import github from "/src/assets/github_logo.png";
import linkedinwhite from "/src/assets/linkedin-white.png";
function technicalWriting() {
  const displayWriting = useRef(null);
  const EventsPage = useRef(null);
  const width = window.innerWidth;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [Writing, setWriting] = useState([]);

  function getWritings(i) {
    const name = Writing[i].writerName;
    const img = Writing[i].writerImage;
    const description = Writing[i].Blog;
    const topic = Writing[i].topic;
    const github = Writing[i].writerGithub;
    const topicimage = Writing[i].topicImage;
    return { name, img, description, topic, github, topicimage };
  }

  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    showSingleWriting(clickedElement.id);
  });

  async function showSingleWriting(i) {
    const { name, img, description, topic, github, topicimage } = getWritings(i);
    navigate("/singleWriting", {
      state: { name, img, description, topic, github, topicimage },
    });
  }

  async function randomImage() {
    const width = window.innerWidth;
    const image = await fetch(`https://random.imagecdn.app/${width}/500`);
    return image.url;
  }

  function fetchJson() {
    fetch("http://localhost:3000/api/v1/technicalWritings")
      .then((response) => response.json())
      .then((data) => {
        setWriting(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <Layout>
      <div>
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
          <div id="technical_writing">
            <h1 className="Event__page_title" style={{ marginTop: "0px" }}>
              Technical Writing
            </h1>
            <hr className=".Achievements_hr" />
            <div className="technical_writing_content" ref={displayWriting}>
              {Writing.map((writing, index) => {
                console.log(writing.topicImage);
                return (
                  <div
                    className="technical"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),url(/Images/Writings/TopicImages/${writing.topicImage})`,
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <img src={`/Images/Writings/WriterImages/${writing.writerImage}`} />
                    <h2>{writing.writerName}</h2>
                    <h2 class="topic">{writing.topic}</h2>
                    <p>{writing.blogTeaser}</p>
                    <div className="button_div">
                      <button id={index}>Continue Reading</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default technicalWriting;
