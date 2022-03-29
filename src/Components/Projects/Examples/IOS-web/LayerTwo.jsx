import "./LayerTwo.css"

import example from "../../../../Images/IOS-web-pictures/Example.png"
import code from "../../../../Images/IOS-web-pictures/Code.png"

const LayerTwo = () => {
    return (
        <section className="webpage">
            <h1>Project 1: Personal Website</h1>
            <p>This website was created to showcase my web development abilites.</p>
            <h4>Click <a href="https://github.com/NateLapak/Website">here</a> for the github repository.</h4>

            <img className="webpage-example" src={example} width="45%" height="55%" alt=""></img>
            <img className="webpage-code" src={code} width="40%" height="55%" alt=""></img>

        </section>
    )
}

export default LayerTwo