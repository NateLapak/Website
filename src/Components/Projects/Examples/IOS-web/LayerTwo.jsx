import "./LayerTwo.css"

import example from "../../../../Images/IOS-web-pictures/FirstWebpage-ex.png"
import code from "../../../../Images/IOS-web-pictures/FirstWebpage-code.png"

const LayerTwo = () => {
    return (
        <section className="webpage">
            <h1>Project 1: Tell A Story</h1>
            <p>One of my first websites made with html and css</p>

            <img className="webpage-example" src={example} width="45%" height="55%" alt=""></img>
            <img className="webpage-code" src={code} width="40%" height="55%" alt=""></img>

        </section>
    )
}

export default LayerTwo