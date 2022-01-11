import {Figure} from "react-bootstrap"
import "./LayerTwo.css"

const LayerTwo = () => {
    return (
        <section className="Handwritten-project">
            <h1>Project 1: Neural Networks and Handwritting</h1>
            <p>Create a neural network that distinguishes between different handwritten digits.</p>
            <h4>Click <a href="https://github.com/NateLapak/Handwritten-digit-using-neural-networks">here</a> for the github repository</h4>

            <Figure style={{float: "left", margin: "3%"}}>
                <Figure.Image
                    width={300}
                    height={200}
                    alt="171x180"
                    src="/ML-pictures/Digit.png"
                />
                <Figure.Caption>
                    Example of a handwritten digit that the ML algorithm has to interpret   
                </Figure.Caption>
            </Figure>
            
            <Figure style={{float: "right", margin: "3%"}}>
                <Figure.Image
                    width={500}
                    height={300}
                    alt="171x180"
                    src="/ML-pictures/SampleCode.png"
                />
                <Figure.Caption>
                    Project code; creates a data set and trains the neural network.
                </Figure.Caption>
            </Figure>

        </section>
    )
}

export default LayerTwo