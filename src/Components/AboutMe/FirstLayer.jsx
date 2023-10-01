import "./FirstLayer.css";

import logo from "../../Images/AboutMeImages/Logo.png";
import { FaUniversity } from "react-icons/fa";

const FirstLayer = () => {
  return (
    <div className="firstLayer">
      <div className="container col-lg-8 col-md-5 col-sm-4">
        {/* Heading */}
        <h1>
          <b>
            About me <FaUniversity />
          </b>
        </h1>

        {/* Image that contains my logo */}
        <img src={logo} className="logo-about" alt="" height={300}></img>

        {/* Paragraph containing a short description of what I'm doing */}
        <p>
          I am taking a Bachelor of Science specialization in Computing science
          at the University of Alberta
        </p>
      </div>
    </div>
  );
};

export default FirstLayer;
