import "/src/Css/events.css";
import Layout from "/src/layout/homepage_layout.jsx";
import React, { useRef, useEffect } from "react";
import Calender from "/src/components/calender.jsx";
import calender_icon from "/src/assets/calender_icon.png";
import { useNavigate } from "react-router-dom";

function events() {
  const displayEvents = useRef(null);
  const displaySingleEvent = useRef(null);
  const navigate = useNavigate();

  // const displaybutton = useRef(null);
  const ditaEvents = [
    {
      title: "Event 1",
      start: "2024-08-01",
      end: "2024-08-01",
      description: "This is a description of event 1",
      registration_link: "https://www.google.com",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      details:
        "The Daystar Tech Innovation Challenge 2024 is an exciting one-day event organized by the Daystar Information Technology Association (DITA) to showcase student talent in technology and innovation. The event aims to bring together tech enthusiasts, coders, and innovators from across the university to present their projects and ideas that could shape the future.This year’s theme is 'Innovation for Impac', focusing on how technology can address real-world problems in areas like healthcare, education, and sustainability.",
    },
    {
      title: "Event 30",
      start: "2024-08-05",
      end: "2024-08-05",
      description: "This is a description of event 30",
      registration_link: "https://www.google.com",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      details: "This is a description of event 2",
    },
    {
      title: "Event 34",
      start: "2024-08-05",
      end: "2024-08-05",
      description: "This is a description of event 34",
      registration_link: "https://www.google.com",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      details: "This is a description of event 3",
    },
    {
      title: "Event 2",
      start: "2024-12-01",
      end: "2024-12-01",
      description: "This is a description of event 2",
      registration_link: "https://www.google.com",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      details: "This is a description of event 4",
    },
    {
      title: "Event 3",
      start: "2024-08-12",
      end: "2024-08-15",
      description: "This is a description of event 3",
      registration_link: "https://www.google.com",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      details: "This is a description of event 5",
    },
  ];

  const daysofweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    console.log("Text content:", clickedElement.id);
    // navigate("/SingleEvent/" );
    showSingleEvent(clickedElement.id);
  });

  function getEvents(i) {
    const title = ditaEvents[i].title;
    const start = ditaEvents[i].start;
    const end = ditaEvents[i].end;
    const description = ditaEvents[i].description;
    const link = ditaEvents[i].registration_link;
    const img = ditaEvents[i].img;
    const details = ditaEvents[i].details;
    return { title, start, end, description, link, img, details };
  }

  function showSingleEvent(i) {
    // console.log(i);
    const { title, start, end, description, link, img, details } = getEvents(i);
    const date = new Date(ditaEvents[i].start);
    const daydate = date.getDate();
    const month = date.getMonth();
    const eventMonth = months[month];
    const year = date.getFullYear();
    navigate("/singleEvent/", {
      state: { title, img, details, daydate, eventMonth, year, link },
    });
  }

  useEffect(() => {
    // display_Events();
    function display_Events() {
      console.log("hello");

      displayEvents.current.innerHTML = ` 
    <h1>Upcoming Events</h1>
    `;

      for (let i = 0; i < ditaEvents.length; i++) {
        const title = ditaEvents[i].title;
        const date = new Date(ditaEvents[i].start);
        const daydate = date.getDate();
        const month = date.getMonth();
        const description = ditaEvents[i].description;
        const link = ditaEvents[i].link;
        displayEvents.current.innerHTML += `
      <div class="event" >
        <hr/>
          <div class="events_date">
              <h2 style="margin: 0px;">${daydate}</h2>
              <h2>${months[month]}</h2>
          </div>
          <div class="events_details">
            <h2 >${title}</h2>
            <div>${description}</div>
            <a id=${i}>Learn More</a>
          </div>
      </div>
      `;
      }
    }

    display_Events();
  }, []);

  return (
    <Layout>
      <div id="Events" ref={displaySingleEvent}>
        <h1 className="Event__page_title">Events</h1>
        <hr />
        <div className="Events_display" ref={displayEvents}></div>

        <div className="Events_calender">
          <Calender events={ditaEvents} />
        </div>
      </div>
    </Layout>
  );
}

export default events;
