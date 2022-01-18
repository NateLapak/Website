import "./FirstLayer.css"

import ReactLogo from "../../Images/HomepageImages/React.png"
import PythonLogo from "../../Images/HomepageImages/Python.png"
import JavaLogo from "../../Images/HomepageImages/Java.png"
import BootLogo from "../../Images/HomepageImages/Boot.png"
import SwiftLogo from "../../Images/HomepageImages/Swift.png"

const FirstLayer = () => {
    return (
        <div className="first-layer">
            <div>
                <h1 className="profile-text">Nathan Lapak</h1>
                <img src={ReactLogo} height="10%" width="15%" alt=""></img>
                <img src={PythonLogo} height="10%" width="10%" alt=""></img> 
                <img src={JavaLogo} height="10%" width="12%" alt=""></img>
                <img src={BootLogo} height="10%" width="10%" alt=""></img>
                <img src={SwiftLogo} height="10%" width="10%" alt=""></img>
            </div>
        </div>
    )
}

export default FirstLayer