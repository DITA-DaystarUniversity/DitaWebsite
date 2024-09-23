import { useLocation } from "react-router-dom";
import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/singleEvents.css";

function Single_event() {
  const location = useLocation();
  const { title, description, link, img, details , time , Eventlocation} =
    location.state || {};
  console.log(title, description, link, img, details , time , Eventlocation);
  return (
    <Layout>
      <h2 className="event_title">{title}</h2>
      <div className="single_event">
        <div className="single_event_img">
          <img src={img} alt={title} />
          <h2>Event Overview</h2>
          <hr />
          <p>{details}</p>
        </div>
        <div className="Single_events_details">
          <div>
            <h3>Time: </h3>
            <p>{time}</p>
            <h3>Location: </h3>
            <p>{Eventlocation}</p>
          </div>
          <div className="registration_details">
            <h3>Registration Details</h3>
            <div style={{ marginBottom: "20px" }}>
              <p>{details}</p>
            </div>
            <a href={link}>Register Here</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Single_event;
