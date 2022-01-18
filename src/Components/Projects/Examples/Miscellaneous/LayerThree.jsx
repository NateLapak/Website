import "./LayerThree.css"

import NumberSystem from "../../../../Images/NumberSystem-pictures/NumberSystems.png"

const LayerThree = () => {
    return (
        <section className="numberSystem">
            <h1>Project 2: Number Systems</h1>
            <p>
                Java program that converts decimal to 
                binary, octal and hexadecimal 
            </p>
            <h4>Click <a href="https://github.com/NateLapak/Number-Systems">here</a> for github repository</h4>

            <img src={NumberSystem} width="60%" height="60%" alt=""></img>

        </section>
    )
}

export default LayerThree