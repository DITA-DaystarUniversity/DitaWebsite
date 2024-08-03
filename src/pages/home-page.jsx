// import React from "react";
import "../Css/homepage.css";
import location_icon from "/src/assets/location_icon.png";
import email_icon from "/src/assets/email_icon.png";
import phone_icon from "/src/assets/phone_icon.png";
import computer_repair from "/src/assets/computer_repair.jpeg";
import software_update from "/src/assets/software_updates.jpeg";
import teaching from "/src/assets/teaching.jpeg";
import google_logo from "/src/assets/googleLogo-b0b9055a.png";
import ibm_logo from "/src/assets/ibmLogo-2c76d577.png";
import oracle_logo from "/src/assets/oracleLogo-cb5b4052.png";
import huawei_logo from "/src/assets/huaweiLogo-3cef1ad7.png";
import linkedin from "/src/assets/linkedin.png";
import github from "/src/assets/github_logo.png";
import instagram from "/src/assets/instagram_logo.png";
import Main_layout from "/src/layout/Main_layout.jsx";

function homePage() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <Main_layout>
      <div id="home_page">
        <div className="home_about">
          <div className="home_about_text">
            <h5>Unlocking Potential Through Technology</h5>
            <h1>Elevate. Innovate.</h1>
          </div>
          <div className="home_about_img"></div>
        </div>

        <div className="home_services">
          <h1>Discover Our Wide Range Of Services</h1>
          <div id="services">
            <div>
              <img src={computer_repair}></img>
              <h2>Computer & Laptop Repairs</h2>
              <p>
                Empowering devices, unleashing potential. Expert computer &
                laptop repairs for students & beyond.Trust us with your tech
                challenges. At dita your digital journey begins here
              </p>
              <p>Learn More</p>
            </div>
            <div>
              <img src={software_update}></img>
              <h2>Software Update & Installation</h2>
              <p>
                Stay current, stay secure. Seamless software updates and
                installation services for optimised performance. Unlock the
                latest features and protect your system.
              </p>
              <p>Learn More</p>
            </div>
            <div>
              <img src={teaching}></img>
              <h2>Teaching & Training for students</h2>
              <p>
                Empowering students with the latest tech know-how. Learn
                software updates & installation from the experts. Stay ahead in
                the digital age with our student-focused teaching and training
                services
              </p>
              <p>Learn More</p>
            </div>
          </div>
        </div>

        <div className="home_meet_team">
          <h1>Meet Our Team</h1>
          <p>Meet Our Team. Get to know the talented individuals behind DITA</p>

          <div className="OurTeams"></div>
        </div>

        <div className="home_mission">
          <h1>Dita's Mission</h1>
          <div>
            <p>
              EmailFor any inquiries or collaborations, please fill out the form
              below.hello@relume.ioPhoneFeel free to give us a call or send us a
              message.+1 (555) 000-0000OfficeVisit our office during business
              hours.123 Sample St, Sydney NSW 2000 AU
            </p>
          </div>
          <h1>Dita's Vision</h1>
          <div>
            <p>
              EmailFor any inquiries or collaborations, please fill out the form
              below. hello@relume.ioPhoneFeel free to give us a call or send us
              a message. +1 (555) 000-0000OfficeVisit our office during business
              hours.123 Sample St, Sydney NSW 2000 AU
            </p>
          </div>
        </div>

        <div className="home_contact">
          <h1>Contact Us</h1>
          <div className="contact_details">
            <div>
              <img src={email_icon}></img>
              <h2>Email</h2>
              <p>
                For any inquiries or collaborations, please reach out on our
                email
              </p>
              <p>Dita@daystar.ac.ke</p>
            </div>
            <div>
              <img src={phone_icon}></img>
              <h2>Phone</h2>
              <p>Feel free to give us a call or send us a message</p>
              <p>+254 712-345-6789</p>
            </div>
            <div>
              <img src={location_icon}></img>
              <h2>Location</h2>
              <p>Visit our office during school hours</p>
              <p>Daystar University, ATHI RIVER, Kenya</p>
            </div>
          </div>
        </div>

        <div className="home_partnerships">
          <div>
            <h1>Partnerships</h1>
            <p>
              Proud partners in the Daystar University Resource Lab for
              Technology and Computer Science: Microsoft, Google, IBM, Huawei
              and more!
            </p>
          </div>

          <div>
            <img src={google_logo}></img>
            <img src={ibm_logo}></img>
            <img src={oracle_logo}></img>
            <img src={huawei_logo}></img>
          </div>
        </div>

        <div className="empty_div"></div>

        <div className="home_footer">
          <div className="footer_links">
            <div>
              <h1>Dita</h1>
            </div>

            <div>
              <h2>Related Links</h2>
              <p>
                <a href="">E-Learning</a>
              </p>

              <a href="">Student Portal</a>
            </div>

            <div>
              <h2>Contact Us</h2>
              <p>
                <a href="">dita@daystar.com</a>
              </p>
              <a href="">Daystar University, ATHI RIVER , KENYA</a>
            </div>
          </div>

          <div className="links">
            <img src={linkedin}></img>
            <img src={github}></img>
            <img src={instagram}></img>
          </div>

          <p className="copyright">© {currentYear} | All Rights Reserved</p>
        </div>
      </div>
    </Main_layout>
  );
}

export default homePage;
