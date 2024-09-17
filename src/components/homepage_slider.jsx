import React , { useRef , useState , useEffect } from "react";
import linkedin from "/src/assets/linkedin.png";
import github from "/src/assets/github_logo.png";
import linkedinwhite from "/src/assets/linkedin-white.png";
function display_leaders() {
  const [number, setNumber] = useState(0); 
  const displayLeaders = useRef(null);

  const ditaleaders = [
    {
      name: "Member 1",
      role: "Member role",
      description:
        "I am a dita memeber active member. I can help you with your projects.",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Member 2",
      role: "Member role",
      description: "This is a description of member 2",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Member 3",
      role: "Member role",
      description: "This is a description of member 3",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Member 4",
      role: "Member role",
      description: "This is a description of member 4",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Member 5",
      role: "Member role",
      description: "This is a description of member 5",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Member 6",
      role: "Member role",
      description: "This is a description of member 6",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Member 7",
      role: "Member role",
      description: "This is a description of member 7",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Member 8",
      role: "Member role",
      description: "This is a description of member 8",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Member 9",
      role: "Member role",
      description: "This is a description of member 9",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Member 10",
      role: "Member role",
      description: "This is a description of member 10",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
    },
  ];

  function getLeaders(i) 
  {
    const name = ditaleaders[i].name;
    const role = ditaleaders[i].role;
    const description = ditaleaders[i].description;
    const img = ditaleaders[i].img;
    const githubLink = ditaleaders[i].github;
    const linkedInLink = ditaleaders[i].linkedIn;
    return {name , role ,description , img}
  }

  useEffect(() => {

  function Leaders() {
    displayLeaders.current.innerHTML = "";
    for (let i = 0; i < ditaleaders.length; i++) {
      const {name , role , description , img , githubLink , linkedInLink} = getLeaders(i)
      displayLeaders.current.innerHTML += `
      <div class="member" style="height: 348px">
        <img src=${img} />
        <h2 style="text-align: start">${name}</h2>
        <p>${role}</p>
        <p style="text-wrap: wrap;  width:200px;text-align: start; font-size: 13px; padding: 0px; text-wrap: wrap">${description}</p>
          <a href=${linkedInLink}} >
            <img src=${linkedinwhite} style="width: 20px; height: 20px; margin-right: 5px" />
          </a>
          <a href=${githubLink}>
            <img src=${github} style="width: 20px; height: 20px;" />
          </a>
        
      </div>
      `;
    }
  }
    Leaders();
}, []);

  return (
    <div ref={displayLeaders} className="OurTeams">
      {/* <button onClick={Leaders}>Leaders</button> */}
    </div>
  );
}

export default display_leaders;