import React , { useRef , useState , useEffect } from "react";
import linkedin from "/src/assets/linkedin.png";
import github from "/src/assets/github_logo.png";
import linkedinwhite from "/src/assets/linkedin-white.png";
import PropagateLoader from "react-spinners/PropagateLoader";
function display_leaders() {
  const [number, setNumber] = useState(0); 
  const displayLeaders = useRef(null);
  const [Leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);


  function fetchJson() {
    fetch("http://localhost:3000/api/v1/ditaleaders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setLeaders(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  


  useEffect(() => {
    fetchJson();

  }, []);

  return (
    <div ref={displayLeaders} className="OurTeams">
      {Leaders.map((leader, index) => 
        {
          
          return (
            <div className="leader" key={index}>
              <img src={leader.leaderImage} />
              <h2>{leader.leaderName}</h2>
              <p>{leader.leaderRole}</p>
              <p>{leader.leaderDescription}</p>
              <div className="Links">
                <a href={leader.linkedinLink}>
                  <img src={linkedinwhite} style={{ width: '25px' , height:'25px' }} />
                </a>
                <a href={leader.githubLink}>
                  <img src={github} style={{ width: '25px' , height:'25px' }} />
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default display_leaders;