import "./FirstLayer.css"
import logo from "../../Images/AboutMeImages/Logo.png"
import {FaUniversity} from "react-icons/fa"

const FirstLayer = () => {
    return (
        <div className="firstLayer">
            <div className="container col-md-6 col-sm-4">
                <h1><b>About me</b></h1>
                <img src={logo} alt="" height={300}></img>
                <p>
                    My name is Nathan Lapak. I am an 18 year old looking to work
                    in the field of Computer Science. Currently, I am getting a Bachelor of Science
                    at Macewan. 
                    <FaUniversity />
                </p>
            </div>
        </div>
    )
}

export default FirstLayer