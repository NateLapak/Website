import {Figure} from "react-bootstrap"
import "./LayerTwo.css"

const LayerTwo = () => {
    return (
        <section className="EarSketch">
            <h1>Project 1: Music Made With Earsketch</h1>
            <p>
                Made my own song using earsketch. Implemented by using 
                python to mix different sounds from a sound collection
            </p>
            <h4>Click <a href="https://github.com/NateLapak/EarSketch-project">here</a> for the github repository.</h4>

            <Figure style={{float: "left", margin: "3%"}}>
                <Figure.Image
                    width={500}
                    height={300}
                    alt="171x180"
                    src="/EarSketch-pictures/EarSketch.png"
                />
                <Figure.Caption>
                    EarSketch DAW (Digital audio workstation)
                </Figure.Caption>
            </Figure>

            <Figure style={{float: "right", margin: "3%"}}>
                <Figure.Image
                    width={500}
                    height={300}
                    alt="171x180"
                    src="/EarSketch-pictures/EarSketch-code.png"
                />
                <Figure.Caption>
                    EarSketch code
                </Figure.Caption>
            </Figure>


        </section>
    )
}

export default LayerTwo