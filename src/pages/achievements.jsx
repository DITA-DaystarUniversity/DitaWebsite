import Layout from "/src/layout/pages_layout.jsx"
import "/src/Css/achievements.css"
import hackathon from "/src/assets/hackathons.jpeg"
import project from "/src/assets/projects.jpeg"
import award from "/src/assets/awards.jpeg"
import { Link } from "react-router-dom";

function Achievements() {
  return (
    <Layout>
     <div id="Achievements">
      <h1 className="Achievements_title">Achievements</h1>
      <hr className="Achievements_hr"/>
      <div className="Achievements_content">
        <Link to="/projects">
        <div>
          <img src={project} width={400}></img>
          <h2>Projects</h2>
        </div>
        </Link>
        <Link to="/hackathon">
        <div>
          <img src={hackathon} width={400} height={400} className="Achievements_hackathon_img"></img>
          <h2 >Hackathons</h2>
        </div>
        </Link>
        <Link to="/awards">
        <div>
          <img src={award} width={400}></img>
          <h2>Awards</h2>
        </div>
        </Link>
      </div>
    </div>
    </Layout>
  );
}

export default Achievements;