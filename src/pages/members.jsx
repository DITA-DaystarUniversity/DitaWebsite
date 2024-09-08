import Layout from "/src/layout/pages_layout.jsx";
import React, { useRef, useState } from "react";
import "/src/Css/members.css";
function members() {
  const [number, setNumber] = useState(0);  
  const ditaMembers = [
    {
      name: "Member 1",
      role: "Member role",
      description:
        "I am a dita memeber active member. I can help you with your projects.",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
    },
    {
      name: "Member 2",
      role: "Member role",
      description: "This is a description of member 2",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
    },
    {
      name: "Member 3",
      role: "Member role",
      description: "This is a description of member 3",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
    },
    {
      name: "Member 4",
      role: "Member role",
      description: "This is a description of member 4",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
    },
    {
      name: "Member 5",
      role: "Member role",
      description: "This is a description of member 5",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
    },
    {
      name: "Member 6",
      role: "Member role",
      description: "This is a description of member 6",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
    },
    {
      name: "Member 7",
      role: "Member role",
      description: "This is a description of member 7",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
    },
    {
      name: "Member 8",
      role: "Member role",
      description: "This is a description of member 8",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
    },
    {
      name: "Member 9",
      role: "Member role",
      description: "This is a description of member 9",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
    },
    {
      name: "Member 10",
      role: "Member role",
      description: "This is a description of member 10",
      img: "https://randompicturegenerator.com/img/car-generator/g91d447ecfe72f9eec67075695beb60be3f06e9f341d675a76e847a2fd150139425d7ca3a1de19130389065a4706df7a5_640.jpg",
    },
  ];

  const displayMembers = useRef(null);

  function randomColor() {
    const red = Math.floor(Math.random() * 49) + 207;
    const green = Math.floor(Math.random() * 49) + 207;
    const blue = Math.floor(Math.random() * 49) + 207;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  // How to await the fetching of the memebers images
  function display_Members() {
    displayMembers.current.innerHTML = "";
    for (let i = 0; i <= ditaMembers.length; i++) {
      const color = randomColor();
      displayMembers.current.innerHTML += `
      <div className="member" style="width: 30%; min-width: 300px; height: 500px; display: flex; flex-direction: column; background: ${color}; margin: 20px; align-items: center; border-radius: 10%; padding-top: 20px">
        <img style="width: 40%; height: 40%; border-radius: 50%; min-width: 200px; margin-left: auto; margin-right: auto" src=${ditaMembers[i].img}/>
        <h2 style="text-align: center; font-family: 'Helvetica', sans-serif; font-size: 24px">${ditaMembers[i].name}</h2>
        <p style="text-align: center; font-family: 'Helvetica', sans-serif; font-size: 22px"><strong>${ditaMembers[i].role}</strong></p>
        <div style="text-align: center; text-wrap: wrap">${ditaMembers[i].description}</div>
      </div>
      `;
    }
  }

  function next()
  {
    // const member = getElementByClassName("member");
    // member.style.backgroundColor = randomColor();
    randomColor();
    if(number < (ditaMembers.length - 1))
    {
      setNumber(number + 1);
      console.log(number);
    }else if(number == ditaMembers.length)
    {
      setNumber(0);
      console.log(number);
    }
  }

  function prev()
  {
    if(number > 0)
    {
      setNumber(number - 1);
    }else if(number < 0)
    {
      setNumber(ditaMembers.length);
    }
  }

  return (
    <Layout>
      <div id="members">
        <h1 className="Event__page_title">Our members</h1>
        <hr />
        <div className="members_content" ref={displayMembers}>
          <button onClick={() => display_Members()}>Show members</button>
        </div>

        <div className="members_display">
          <button onClick={() => prev()}>&lt;</button>
          <button onClick={() => next()}>&gt;</button>
              <div className="member" style={{backgroundColor: randomColor(),  alignItems: "center", borderRadius: "10%", padding: "20px"}}>
                <img src={ditaMembers[number].img} />
                <h2>{ditaMembers[number].name}</h2>
                <p>{ditaMembers[number].role}</p>
                <div>{ditaMembers[number].description}</div>
              </div>
        </div>
      </div>
    </Layout>
  );
}

export default members;
