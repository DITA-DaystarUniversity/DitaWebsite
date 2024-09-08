import "/src/Css/events.css";
import Layout from "/src/layout/pages_layout.jsx";
import React, { useRef } from "react";
import Calender from "/src/components/calender.jsx";

function events() {
  const displayEvents = useRef(null);
  const displaybutton = useRef(null);
  const ditaEvents = [
    {
      title: "Event 1",
      start: "2024-08-01",
      end: "2024-08-01",
      time: "10:00 AM - 11:00 AM",
      venue: "Room 101",
      description: "This is a description of event 1",
    },
    {
      title: "Event 30",
      start: "2024-08-05",
      end: "2024-08-05",
      time: "10:00 AM - 11:00 AM",
      venue: "Room 101",
      description: "This is a description of event 30",
    },
    {
      title: "Event 34",
      start: "2024-08-05",
      end: "2024-08-05",
      time: "10:00 AM - 11:00 AM",
      venue: "Room 101",
      description: "This is a description of event 34",
    },
    {
      title: "Event 2",
      start: "2024-12-01",
      end: "2024-12-01",
      time: "10:00 AM - 11:00 AM",
      venue: "Room 101",
      description: "This is a description of event 2",
    },
    {
      title: "Event 3",
      start: "2024-08-12",
      end: "2024-08-15",
      time: "10:00 AM - 11:00 AM",
      venue: "Room 101",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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

  // display_Events();
  function display_Events() {
    const style = {
      margin_top: "20px",
      border_radius: "50px",
      width: "300px",
      padding: "20px",
      margin: "20px",
      margin_left: "10px",
      font_size: "20px",
    };
    const displayWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (displayWidth < 768) {
      style.margin_top = "15px";
      style.width = "260px";
      style.padding = "10px";
      style.margin = "10px";
      style.margin_left = "50px";
      style.font_size = "19px";
    }
    displayEvents.current.innerHTML = "";
    for (let i = 0; i <= ditaEvents.length; i++) {
      const day = new Date(ditaEvents[i].start).getDay();
      const eventDays =
        new Date(ditaEvents[i].end).getDay() -
        new Date(ditaEvents[i].start).getDay();
      const display = eventDays > 1 ? true : false;
      displayEvents.current.innerHTML += `
             <div className="event" style="text-align:start; margin-top: ${
               style.margin_top
             }; min-width: ${style.width}; max-width: ${
        style.width
      }; border: 1px solid rgba(217, 217, 217, 1);; border-radius: ${
        style.border_radius
      }; box-shadow: 5px 5px 5px black; padding: ${
        style.padding
      }; background: rgba(217, 217, 217, 1);">
              <h2 style="font-family: 'Helvetica', sans-serif; margin: 0px; text-align: center; font-size: ${
                style.font_size
              };"><strong>Event Name</strong>: ${ditaEvents[i].title}</h2>
              <hr style="width: 100%; margin-left: ${
                style.margin_left
              }; color: black; margin: 0px">
              <p style="font-family: 'Helvetica', sans-serif;"><strong>Day</strong>: ${
                daysofweek[day]
              }</p>
              <p style="font-family: 'Helvetica', sans-serif;"><strong>Date</strong>: ${
                ditaEvents[i].start
              }</p>
              <p style="font-family: 'Helvetica', sans-serif;"><strong>Venue</strong>: ${
                ditaEvents[i].venue
              }</p>
              <p style="font-family: 'Helvetica', sans-serif;"><strong>Time</strong>: ${
                ditaEvents[i].time
              }</p>
              <div style="font-family: 'Helvetica', sans-serif; text-wrap: wrap"><strong>Description</strong>: ${
                ditaEvents[i].description
              }</div>
              <p style="font-family: 'Helvetica', sans-serif; display: ${
                display ? "block" : "none"
              }"><strong>Event Duration</strong>: ${eventDays} days</p>
            </div>
      `;
    }
  }

  function display_button() {
    displaybutton.current.style.display = "none";
  }

  return (
    <Layout>
      <h1 className="Event__page_title">Events</h1>
      <hr />
      <div id="Events">
        <div className="Events_display" ref={displayEvents}>
          <button
            onClick={() => {
              display_Events();
              display_button();
            }}
            className="events_btn"
            ref={displaybutton}
          >
            More details about events
          </button>
        </div>

        <div className="Events_calender">
          <Calender events={ditaEvents} />
        </div>
      </div>
    </Layout>
  );
}

export default events;
