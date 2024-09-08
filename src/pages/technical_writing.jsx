import Layout from "/src/layout/pages_layout.jsx";
import React, { useRef } from "react";
import "/src/Css/technical_writing.css";
function technicalWriting() {
  const displayWriting = useRef(null);

  const ditaWriting = [
    {
      name: "Writer Name",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      topic: "Topic title",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Writer Name",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      topic: "Topic title",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Writer Name",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      topic: "Topic title",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Writer Name",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      topic: "Topic title",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Writer Name",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      topic: "Topic title",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  function display_Writing() {
    displayWriting.current.innerHTML = "";
    for (let i = 0; i <= ditaWriting.length; i++) {
      displayWriting.current.innerHTML += `
      <div  style="  width: 40%;background-color: aqua;padding: 50px; margin: 20px; min-width: 210px;">
        <img style="border-radius: 50%;width: 150px;height: 150px;" src=${ditaWriting[i].img}/>
        <h2 style="font-size: 30px;margin: 0px;margin-bottom: 10px;">${ditaWriting[i].name}</h2>
        <h3 style="margin: 0px;margin-bottom: 10px;">${ditaWriting[i].topic}</h3>
        <div style="font-size: 19px;">${ditaWriting[i].description}</div>
        <div style="display: flex;justify-content: end;">
        <button style="margin-top: 10px; background-color: rgba(28, 57, 123, 1); color: white; padding: 10px; font-family: Inter;font-size: 13px;font-weight: 800;line-height: 15.73px;text-align: left; margin-right: -40px; margin-bottom: -20px; cursor: pointer;" 
        > <a href="https://google.com">Continue reading</a></button>
        </div>
      </div>
      `;
    }
  }
  return (
    <Layout>
      <div id="technical_writing">
        <h1 className="Event__page_title">Technical Writing</h1>
        <hr />
        <div className="technical_writing_content" ref={displayWriting}>
          <button onClick={() => display_Writing()}>Display All</button>
        </div>
      </div>
    </Layout>
  );
}

export default technicalWriting;
