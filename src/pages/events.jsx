import "/src/Css/events.css"
import Main_layout from "/src/layout/Main_layout.jsx";
import Days from "/src/components/calender-days.jsx";
import React from "react";



function events() {
  const date = Date.now();
  const currentMonth = new Date(date).getMonth();
  const currentYear = new Date(date).getFullYear();
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
  ]

  return (
    <Main_layout>
      <div id="events">
        <div className="Calender">
          <p className="month_year"> {months[currentMonth]}  {currentYear}</p>
          <div className="name_of_days">
            <p>S</p>
            <p>M</p>
            <p>T</p>
            <p>W</p>
            <p>T</p>
            <p>F</p>
            <p>S</p>
          </div>
            <Days/>
        </div>
      </div>
    </Main_layout>
  );
}

export default events;