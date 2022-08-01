import "./FirstLayer.css"

import ReactLogo from "../../Images/HomepageImages/React.png"
import JSLogo from "../../Images/HomepageImages/JS.webp"
import PythonLogo from "../../Images/HomepageImages/Python.png"
import BootLogo from "../../Images/HomepageImages/Boot.png"
// import ProfilePic from "../../Images/HomepageImages/ProfilePic.jpg"
import ProfilePic from "../../Images/AboutMeImages/Logo.png"
import Seaborn from "../../Images/HomepageImages/Seaborn.jpg"

import { IconContext } from "react-icons/lib"
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const FirstLayer = () => {


    return (
        <div className="first-layer">

            {/* Homepage and introduction section */}
            <div className="container col-lg-10 col-md-10 col-sm-8 col-xs-6">

                {/* Profile picture and heading */}
                <img className="profile-pic" src={ProfilePic} alt="" ></img>

                <div className="container-fluid">
                    <h1 className="profile-text">My name is <b>Nathan Lapak</b></h1>
                    <h4 className="profile-title">Front-end development and data visualization</h4>
                </div>

                {/* Github and Linkedin icons */}
                    <IconContext.Provider value={{ className: "shared-class", size: 40 }}>
                        <a href="https://github.com/NateLapak"><AiFillGithub href="https://github.com/NateLapak"/></a>
                        <a href="https://www.linkedin.com/in/nathan-lapak-a88b2118a/"><AiFillLinkedin /></a>
                    </IconContext.Provider>

                {/* Short description about myself */}
                <div className="about-me">
                    <p>
                        Since I began programming, I've taken an interest in front-end development,
                        data visualization and other projects. I want to continue learning, collaborating
                        and developing software to further my passion in computer science.
                    </p>
                </div>


                {/* Images of technologies including Python, JS, etc */}
                <div className="images">
                    <img src={ReactLogo} height={100} width={100} alt=""></img>
                    <img src={PythonLogo} height={100} width={100} alt=""></img> 
                    <img src={BootLogo} height={100} width={100} alt=""></img>
                    <img src={JSLogo} height={100} width={100} alt=""></img>
                    <img src={Seaborn} height={100} width={100} alt=""></img>
                </div> 

            </div>
        </div>
    )
}

export default FirstLayer