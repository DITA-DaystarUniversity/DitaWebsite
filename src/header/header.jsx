import "/src/Css/header.css";
import dita_logo from "/public/ditaLogo-3d409f18.png";
import menu from "/src/assets/menu.png";
import { Link } from "react-router-dom";
// import Links from

function header() {
  return (
    <>
      <div id="header">
        <div className="header_logo">
          <img src={dita_logo} />
        </div>
        <div className="nav_links">
          <Link to="/about">About us</Link>
          <Link to="/about">Events</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/teams">Teams</Link>
        </div>
        <div className="header_menu">
          <button
            onClick={() => {
              // document.querySelector(".menu_div").style.display = "flex"

              if (
                document.querySelector(".menu_div").style.display === "none"
              ) {
                document.querySelector(".menu_div").style.display = "flex";
              } else {
                document.querySelector(".menu_div").style.display = "none";
              }
            }}
          >
            <img src={menu} />
          </button>
        </div>
      </div>
      <div className="menu_div">
        <Link to="/about">About us</Link>
        <Link to="/about">Events</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/teams">Teams</Link>
      </div>
    </>
  );
}

export default header;
