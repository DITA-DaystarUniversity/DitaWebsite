import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/awards.css";
import { useState, useRef } from "react";

function awards() {
  const displayAwards = useRef(null);
  const [number, setNumber] = useState(0);

  const awards = [
    {
      awardName: "Award 1",
      awardCategory: "Category 1",
      awardProduct: "Product 1",
      year: "2022",
    },
    {
      awardName: "Award 2",
      awardCategory: "Category 2",
      awardProduct: "Product 2",
      year: "2022",
    },
    {
      awardName: "Award 3",
      awardCategory: "Category 3",
      awardProduct: "Product 3",
      year: "2022",
    },
    {
      awardName: "Award 4",
      awardCategory: "Category 4",
      awardProduct: "Product 4",
      year: "2022",
    },
    {
      awardName: "Award 5",
      awardCategory: "Category 5",
      awardProduct: "Product 5",
      year: "2021",
    },
    {
      awardName: "Award 6",
      awardCategory: "Category 6",
      awardProduct: "Product 6",
      year: "2021",
    },
    {
      awardName: "Award 7",
      awardCategory: "Category 7",
      awardProduct: "Product 7",
      year: "2020",
    },
    {
      awardName: "Award 8",
      awardCategory: "Category 8",
      awardProduct: "Product 8",
      year: "2020",
    },
    {
      awardName: "Award 9",
      awardCategory: "Category 9",
      awardProduct: "Product 9",
      year: "2020",
    },
    {
      awardName: "Award 10",
      awardCategory: "Category 10",
      awardProduct: "Product 10",
      year: "2019",
    },
  ];

  function display_Awards() {
    displayAwards.current.innerHTML = "";
    for (let i = 0; i < awards.length; i++) {
      displayAwards.current.innerHTML += `
      <div class="awards_item">
        <img src="https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg"></img>
        <hr/>
        <h2>${awards[i].awardName}</h2>
        <hr/>
        <p>
          <strong>Category: </strong><br/>
          ${awards[i].awardCategory}</p>
          <p>
          <strong>Product: </strong><br/>
          ${awards[i].awardProduct}</p>
      </div>
      `;
    }
  }

  return (
    <Layout>
      <div id="awards">
        <h1 className="Event__page_title">Hackathon</h1>
        <hr />
        <div className="awards_content" ref={displayAwards}>
          <button onClick={() => display_Awards()}>Show More</button>
        </div>
      </div>
    </Layout>
  );
}

export default awards;
