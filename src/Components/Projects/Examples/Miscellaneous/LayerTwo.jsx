import "./LayerTwo.css"

import EarSketch from "../../../../Images/EarSketch-pictures/EarSketch.png"
import EarSketchCode from "../../../../Images/EarSketch-pictures/EarSketch-code.png"

const LayerTwo = () => {
    return (
        <section className="EarSketch">
            <h1>Project 1: Music Made With Earsketch</h1>
            <p>
                Made my own song using earsketch. Implemented by using 
                python to mix different sounds from a sound collection
            </p>
            <h4>Click <a href="https://github.com/NateLapak/EarSketch-project">here</a> for the github repository.</h4>

            <img className="Earsketch-ex" src={EarSketch} width="40%" height="50%" alt=""></img>
            <img className="Earsketch-code" src={EarSketchCode} width="40%" height="50%" alt=""></img>

        </section>
    )
}

export default LayerTwo