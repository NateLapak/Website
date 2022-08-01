import "./Secondlayer.css"

import {GoLocation} from "react-icons/go"
import {RiComputerLine} from "react-icons/ri"
import {IoShareSocialSharp} from "react-icons/io5"
import {BsLinkedin, BsGithub} from "react-icons/bs"

const Secondlayer = () => {
    return (
        <div className="container second-layer col-lg-8 col-8-md col-6-sm">
            
            <h1>Personal information</h1>

            {/* Location section with heading and paragraph */}
            <div className="location">

                <h2>Location <GoLocation /></h2>
                <p>
                    I am a develeoper based in Edmonton, Canada. I've been here my entire life
                    and I will get my bachelor degree here as well. 
                </p>
            </div>

            {/* Goals section with heading and paragraph */}
            <div className="plans">
                <h2>Plans <RiComputerLine /></h2>
                <p>
                    After university, I plan to start my career in a related computer science field.
                    Cybersecurity and Big Data are fields that interest me the most and I dream of working in.
                </p>
            </div>

            {/* Social media section with heading and links to github and Linkedin */}
            <div className="media">
                <h2>Social Media <IoShareSocialSharp /></h2>
                <p>
                    Contact me on social media!
                    <br />
                    Github <a href="https://github.com/NateLapak">< BsGithub /></a>
                    <br />
                    Linkedin <a href="https://www.linkedin.com/in/nathan-lapak-a88b2118a/"><BsLinkedin /></a>
                    <br />
                </p>
            </div>
        </div>
    )
}

export default Secondlayer