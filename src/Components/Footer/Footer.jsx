import "./Footer.css"
import { IconContext } from "react-icons/lib"
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';


const Footer = () => {
    return (
    <div className="footer">

        {/* Footer section */}
        <footer className="footer-content">

            {/* Heading for footer */}
            <h4>Site made by Nathan Lapak</h4>

            {/* Github and Linkedin logo with links */}
            <IconContext.Provider value={{ className: "shared-class", size: 40 }}>
                        <h5>nathan.lapak@gmail.com</h5>
                        <a href="https://github.com/NateLapak"><AiFillGithub/></a>
                        <a href="https://www.linkedin.com/in/nathan-lapak-a88b2118a/"><AiFillLinkedin /></a>
            </IconContext.Provider>

            {/* Copyright */}
            <p> 
                &copy;{new Date().getFullYear()} Nathan Lapak built and hosted using github pages
            </p>
        </footer>
    </div>
    )
}

export default Footer