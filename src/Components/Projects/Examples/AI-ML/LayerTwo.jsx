import "./LayerTwo.css"

import digit from "../../../../Images/ML-pictures/Digit.png"
import sampleCode from "../../../../Images/ML-pictures/SampleCode.png"

const LayerTwo = () => {
    return (
        <section className="Handwritten-project">
            <h1>Project 1: Neural Networks and Handwritting</h1>
            <p>Create a neural network that distinguishes between different handwritten digits.</p>
            <h4>Click <a href="https://github.com/NateLapak/Handwritten-digit-using-neural-networks">here</a> for the github repository</h4>

            <img className="digit" src={digit} height="55%" width="40%" alt=""></img>
            <img className="sample-code" src={sampleCode} height="55%" width="40%" alt=""></img>

        </section>
    )
}

export default LayerTwo