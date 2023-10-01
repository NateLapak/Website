import "./FirstLayer.css";

import profile from "../../Images/AboutMeImages/headshot.jpg";
import UofALogo from "../../Images/HealthHackED-images/UofA-logo.png";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons/lib";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const FirstLayer = () => {
  return (
    <div className="first-layer">
      {/* Homepage and introduction section */}
      <div className="container col-lg-10 col-md-10 col-sm-10 col-xs-10">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <img className="profile-pic container-fluid" src={profile} alt=""></img>

        {/* Profile picture and heading */}
        <div className="container-fluid">
          <h1 className="profile-text">Nathan Lapak</h1>
          <h4 className="profile-title">Student & Software Developer</h4>
        </div>

        {/* Github and Linkedin icons */}
        <IconContext.Provider value={{ className: "shared-class", size: 40 }}>
          <a href="https://github.com/NateLapak">
            <AiFillGithub href="https://github.com/NateLapak" />
          </a>
          <a href="https://www.linkedin.com/in/nathan-lapak-a88b2118a/">
            <AiFillLinkedin />
          </a>
        </IconContext.Provider>

        <div className="homepage-buttons">
          <Link to="/contact">
            <button type="button" className="btn btn-outline-primary">
              Click here to contact me
            </button>
          </Link>
          <Link to="/resume">
            <button type="button" className="btn btn-outline-primary">
              Click here for my resume
            </button>
          </Link>
        </div>

        <div className="images">
          <img className="w-25" src={UofALogo} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default FirstLayer;
