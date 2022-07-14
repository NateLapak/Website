import "./FirstLayer.css"

import ReactLogo from "../../Images/HomepageImages/React.png"
import JSLogo from "../../Images/HomepageImages/JS.webp"
import PythonLogo from "../../Images/HomepageImages/Python.png"
import BootLogo from "../../Images/HomepageImages/Boot.png"
import ProfilePic from "../../Images/HomepageImages/ProfilePic.jpg"

import { IconContext } from "react-icons/lib"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const FirstLayer = () => {
    return (
        <div className="first-layer">

            {/* Homepage and introduction section */}
            <div className="container col-lg-10 col-md-10 col-sm-8 col-xs-6">

                {/* Profile picture and heading */}
                <img className="profile-pic" src={ProfilePic} alt="" ></img>
                <h1 className="profile-text">My name is <b>Nathan Lapak</b></h1>

                {/* Github and Linkedin icons */}
                    <IconContext.Provider value={{ className: "shared-class", size: 40 }}>
                        <a href="https://github.com/NateLapak"><AiFillGithub href="https://github.com/NateLapak"/></a>
                        <a href="https://www.linkedin.com/in/nathan-lapak-a88b2118a/"><AiFillLinkedin /></a>
                    </IconContext.Provider>

                {/* Short description about myself */}
                <div className="about-me">

                    <p>I've been programming since I was 15 years old and since then I have grown to
                        become passionate in designing, programming and developing all sorts of 
                        different projects. From developing websites in JS to creating music in Python,
                        i've grown to enjoy the field of computer science.
                    </p>

                    
                    <p>
                        I will be starting a Bachelor of Science (BSc) at Macewan University in Alberta. I plan to transfer to 
                        the University of Alberta later on unless I decide that Macewan University is worth staying at.
                    </p>
                </div>


                {/* Images of technologies including Python, JS, etc */}
                <div className="images">
                    <img src={ReactLogo} height="10%" width="11%" alt=""></img>
                    <img src={PythonLogo} height="10%" width="10%" alt=""></img> 
                    <img src={BootLogo} height="10%" width="10%" alt=""></img>
                    <img src={JSLogo} height="10%" width="10%" alt=""></img>
                </div> 

            </div>
        </div>
    )
}

export default FirstLayer