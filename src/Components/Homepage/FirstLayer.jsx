import "./FirstLayer.css"

import ReactLogo from "../../Images/HomepageImages/React.png"
import JSLogo from "../../Images/HomepageImages/JS.webp"
import PythonLogo from "../../Images/HomepageImages/Python.png"
import BootLogo from "../../Images/HomepageImages/Boot.png"
import ProfilePic from "../../Images/HomepageImages/ProfilePic.jpg"

import { IconContext } from "react-icons/lib"
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

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
                        <a href="https://www.youtube.com/channel/UCQQ9XEedPA9nL2Z0bxpV9qw"><AiFillYoutube /></a>
                    </IconContext.Provider>

                {/* Short description about myself */}
                <div className="about-me">

                    <p>I've been programming since I was 15 years old and since then I have grown to
                        become passionate in designing, programming and developing all sorts of 
                        different projects. From developing websites in JS to creating music in Python,
                        i've grown to enjoy the field of computer science.
                    </p>

                    
                    <p>
                        Aside from programming, I also enjoy playing music like piano and guitar. Although I mostly 
                        play classical music, I would like to play rock music and possibly start
                        composing my own songs like what I did with earsketch.
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