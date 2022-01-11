import { Figure } from "react-bootstrap"
import "./LayerTwo.css"

const LayerTwo = () => {
    return (
        <section className="webpage">
            <h1>Project 1: Tell A Story</h1>
            <p>One of my first websites made with html and css</p>

            <Figure style={{float: "left", margin: "3%"}}>
                <Figure.Image
                    width={400}
                    height={200}
                    alt="171x180"
                    src="/IOS-web-pictures/FirstWebpage-ex.png"
                />
                <Figure.Caption>
                    Example code from project.
                </Figure.Caption>
            </Figure>
            
            <Figure style={{float: "right", margin: "3%"}}>
                <Figure.Image
                    width={550}
                    height={200}
                    alt="171x180"
                    src="/IOS-web-pictures/FirstWebpage-code.png"
                />
                <Figure.Caption>
                    Example code from project.
                </Figure.Caption>
            </Figure>

        </section>
    )
}

export default LayerTwo