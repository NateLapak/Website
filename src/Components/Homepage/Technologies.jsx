import "./Technologies.css"

import ReactLogo from "../../Images/HomepageImages/React.png"
import JSLogo from "../../Images/HomepageImages/JS.webp"
import FlaskLogo from "../../Images/HomepageImages/Flask.jpg"
import PythonLogo from "../../Images/HomepageImages/Python.png"
import NextJSLogo from "../../Images/HomepageImages/NextJS.jpg"
import TailwindLogo from "../../Images/HomepageImages/Tailwind.jpg"


const Technologies = () => {
    return (
        <div className="technologies">
            <h1><b>Tech Stack</b></h1>
            <h5>
                I have experience developing websites using React, ChakraUI and Flask. I have also done a project in NextJS and Tailwind as well.
            </h5>

            <div className="technologies">
                <h4>I use React, ChakraUI & Flask for full stack, personal projects.</h4>
                <div className="images container col-lg-5 col-md-4 col-sm-3">
                    <img className="w-25" src={ReactLogo} alt=""></img>
                    <img className="w-25 " src={JSLogo} alt=""></img>
                    <img className="w-25" src={FlaskLogo} alt=""></img>
                    <img className="w-25" src={PythonLogo} alt=""></img>
                </div>

                <h4>I have also worked briefly with the following technologies as well:</h4>
                <div className="images container col-lg-6 col-md-5 col-sm-3">
                    <h4>NextJS and Tailwind</h4>
                    <img className="w-25" src={NextJSLogo} alt=""></img>
                    <img className="w-25" src={TailwindLogo} alt=""></img>
                </div>


            </div>

        </div>
    )
}

export default Technologies



