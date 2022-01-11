import { Figure } from "react-bootstrap"
import "./LayerTwo.css"

const LayerTwo = () => {
    return (
        <section className="pong">
            <h1>Project 1: Pong Game</h1>
            <p>Pong made in the unity engine. Scripting language used was C#</p>
            <h4>Click <a href="https://github.com/NateLapak/Pong-game">here</a> for the github repository</h4>
            <Figure style={{float: "left", margin: "3%"}}>
                <Figure.Image
                    width={250}
                    height={200}
                    alt="171x180"
                    src="/GameDev-pictures/Pong-code.png"
                />
                <Figure.Caption>
                    Example code from project.
                </Figure.Caption>
            </Figure>

            <Figure style={{float: "right", margin: "3%"}}>
                <Figure.Image
                    width={500}
                    height={300}
                    alt="171x180"
                    src="/GameDev-pictures/Pong-gameplay.png"
                />
                <Figure.Caption>
                    Example of a handwritten digit that the ML algorithm has to interpret   
                </Figure.Caption>
            </Figure>
            
        </section>
    )
}

export default LayerTwo