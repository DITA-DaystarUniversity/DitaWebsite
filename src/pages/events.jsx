import "/src/Css/events.css";
import Layout from "/src/layout/pages_layout.jsx";
import React, {useRef} from "react";
import Calender from "/src/components/calender.jsx";




function events() {
  const displayEvents = useRef(null);
  const displaybutton = useRef(null);
  const ditaEvents = [
    {
      title:"Event 1",
      start:"2024-08-01",
      end:"2024-08-01",
      time:"10:00 AM - 11:00 AM",
      venue:"Room 101",
      description:"This is a description of event 1"
    },
    {
      title:"Event 30",
      start:"2024-08-05",
      end:"2024-08-05",
      time:"10:00 AM - 11:00 AM",
      venue:"Room 101",
      description:"This is a description of event 30"
    },
    {
      title:"Event 34",
      start:"2024-08-05",
      end:"2024-08-05",
      time:"10:00 AM - 11:00 AM",
      venue:"Room 101",
      description:"This is a description of event 34"
    }
  ]

  const daysofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // display_Events();
 function display_Events() {
    displayEvents.current.innerHTML = "";
    for (let i = 0; i <= ditaEvents.length ; i++) {
      const day = new Date(ditaEvents[i].start).getDay();
      displayEvents.current.innerHTML += `
             <div className="event" style="text-align:center; margin-top: 70px;">
              <h2 style="font-family: 'Courier New', Courier, monospace; margin: 0px;">Event Title: ${ditaEvents[i].title}</h2>
              <hr style="width: 60%; margin-left: 20%;">
              <p style="font-family: 'Courier New', Courier, monospace;">Day: ${daysofweek[day]}</p>
              <p style="font-family: 'Courier New', Courier, monospace;">Date: ${ditaEvents[i].start}</p>
              <p style="font-family: 'Courier New', Courier, monospace;">Venue: ${ditaEvents[i].venue}</p>
              <p style="font-family: 'Courier New', Courier, monospace;">Time: ${ditaEvents[i].time}</p>
              <p style="font-family: 'Courier New', Courier, monospace;">Description: ${ditaEvents[i].description}</p>
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
       <hr/>
      <div id="Events">

        <div className="Events_display" ref={displayEvents}>
          <button onClick={()=>{display_Events(); display_button();}} className="events_btn"  ref={displaybutton}>More details about events</button>
        </div>

        <div className="Events_calender">
            <Calender events={ditaEvents} />
        </div>
      </div>
    </Layout>
  );
}

export default events;
