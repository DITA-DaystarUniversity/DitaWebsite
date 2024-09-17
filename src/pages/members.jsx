import Layout from "/src/layout/homepage_layout.jsx";
import React, { useRef, useState , useEffect} from "react";
import "/src/Css/members.css";
import github from "/src/assets/github_logo.png";
import linkedinwhite from "/src/assets/linkedin-white.png";
function members() {
  const [number, setNumber] = useState(0);
  const ditaMembers = [
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
      linkedIn: "",
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

  const displayMembers = useRef(null);

  function randomColor() {
    const red = Math.floor(Math.random() * 49) + 207;
    const green = Math.floor(Math.random() * 49) + 207;
    const blue = Math.floor(Math.random() * 49) + 207;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  function getMembers(i) {
    const name = ditaMembers[i].name;
    const role = ditaMembers[i].role;
    const description = ditaMembers[i].description;
    const img = ditaMembers[i].img;
    const githubLink = ditaMembers[i].github;
    const linkedInLink = ditaMembers[i].linkedIn;
    return {name , img ,role,  description , githubLink , linkedInLink}
  }


  useEffect(() => {
    async function  display_Members() {
    displayMembers.current.innerHTML = "";
    for (let i = 0; i <= ditaMembers.length; i++) {
      const color = randomColor();
      const {name , img , role , description , githubLink , linkedInLink} = getMembers(i)
      displayMembers.current.innerHTML += `
      <div className="member" style="width: 30%; min-width: 300px; height: 500px; display: flex; flex-direction: column; background: ${color}; margin: 20px; align-items: center; padding-top: 20px">
        <img src=${img} style="width: 40%; height: 40%; border: 1px solid black; border-radius: 50%; min-width: 200px; margin-left: auto; margin-right: auto" />
        <h2 style="text-align: center; font-family: 'Helvetica', sans-serif; font-size: 24px">${name}</h2>
        <p style="text-align: center; font-family: 'Helvetica', sans-serif; font-size: 22px"><strong>${role}</strong></p>
        <div style="text-align: center; text-wrap: wrap">${description}</div>

        <div style="display: flex; justify-content: center; margin-top: 20px; align-items: center">
          <a href=${linkedInLink}} >
            <img src=${linkedinwhite} style="width: 25px; height: 25px; margin-right: 10px" />
          </a>
          <a href=${githubLink}>
            <img src=${github} style="width: 20px; height: 20px; margin-top: 2px" />
          </a>
        </div>

      </div>
      `;
    }
  }
    display_Members();
  }, []);


  return (
    <Layout>
      <div id="members">
        <h1 className="Event__page_title">Meet Our Members</h1>
        <hr className=".Achievements_hr" />
        <div className="members_content" ref={displayMembers}>
        </div>
      </div>
    </Layout>
  );
}

export default members;
