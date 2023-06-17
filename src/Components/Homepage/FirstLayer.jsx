import "./FirstLayer.css"

import Profile from "../../Images/AboutMeImages/Profile.jpg"
import UofALogo from "../../Images/HealthHackED-images/UofA-logo.png"

import { IconContext } from "react-icons/lib"
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const FirstLayer = () => {

    return (
        <div className="first-layer">

            {/* Homepage and introduction section */}
            <div className="container col-lg-10 col-md-10 col-sm-8 col-xs-6">

                {/* Profile picture and heading */}
                <img className="profile-pic" src={Profile} alt="" ></img>
                <div className="container-fluid">
                    <h1 className="profile-text">My name is Nathan Lapak</h1>
                    <h4 className="profile-title">Web development and Web design</h4>
                </div>
                {/* Github and Linkedin icons */}
                <IconContext.Provider value={{ className: "shared-class", size: 40 }}>
                    <a href="https://github.com/NateLapak"><AiFillGithub href="https://github.com/NateLapak"/></a>
                    <a href="https://www.linkedin.com/in/nathan-lapak-a88b2118a/"><AiFillLinkedin /></a>
                </IconContext.Provider>

                {/* Short description about myself */}
                <div className="about-me">
                    <p>
                        Since I began programming, I've taken an interest in web development and designing. 
                        I want to continue learning, collaborating
                        and developing software to further my passion in computer science. My projects can be seen
                        further down the page.
                        <br />
                        <br />
                        I am currently pursuing a Bachelor of Science in Computing Science at the University of Alberta.
                    </p>
                </div>

                <div className="images">
                    <img className="w-50 m-5" src={UofALogo} alt=""></img>
                </div>

            </div>

        </div>
    )
}

export default FirstLayer