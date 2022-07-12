import "./Secondlayer.css"

import {GoLocation} from "react-icons/go"
import {RiComputerLine} from "react-icons/ri"
import {IoShareSocialSharp} from "react-icons/io5"
import {BsLinkedin, BsGithub} from "react-icons/bs"

const Secondlayer = () => {
    return (
        <div className="container second-layer col-8-md col-6-sm">
            <h1>Location <GoLocation /></h1>
            <p>
                I am a develeoper based in Edmonton, Canada. I've been here my entire life
                and I will get my bachelor degree here as well. 
            </p>

            <h1>Goals <RiComputerLine /></h1>
            <p>
                After university, I plan to start my career in a related computer science field.
                Cybersecurity and Big Data are fields that interest me the most and I dream of working in.
            </p>

            <h1>Social Media <IoShareSocialSharp /></h1>
            <p>
                Contact me on social media!
                <br />
                Github <a href="https://github.com/NateLapak">< BsGithub /></a>
                <br />
                Linkedin <a href="https://www.linkedin.com/in/nathan-lapak-a88b2118a/"><BsLinkedin /></a>
            </p>
        </div>
    )
}

export default Secondlayer