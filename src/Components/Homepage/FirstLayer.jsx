import "./FirstLayer.css"

import ReactLogo from "../../Images/HomepageImages/React.png"
import PythonLogo from "../../Images/HomepageImages/Python.png"
import JavaLogo from "../../Images/HomepageImages/Java.png"
import BootLogo from "../../Images/HomepageImages/Boot.png"
import CppLogo from "../../Images/HomepageImages/C++.png"

const FirstLayer = () => {
    return (
        <div className="first-layer">
            <div>
                <h1 className="profile-text">Nathan Lapak</h1>

                <div className="images">
                    <img src={ReactLogo} height="10%" width="15%" alt=""></img>
                    <img src={PythonLogo} height="10%" width="10%" alt=""></img> 
                    <img src={JavaLogo} height="10%" width="12%" alt=""></img>
                    <img src={BootLogo} height="10%" width="10%" alt=""></img>
                    <img src={CppLogo} height="10%" width="12%" alt="" style={{marginLeft: "2%"}}></img>
                </div>
            </div>
        </div>
    )
}

export default FirstLayer