import { Figure } from "react-bootstrap"
import "./LayerThree.css"

const LayerThree = () => {
    return (
        <section className="numberSystem">
            <h1>Project 2: Number Systems</h1>
            <p>
                Java program that converts decimal to 
                binary, octal and hexadecimal 
            </p>
            <h4>Click <a href="https://github.com/NateLapak/Number-Systems">here</a> for github repository</h4>

            <Figure style={{float: "left", margin: "3%"}}>
                <Figure.Image
                    width={500}
                    height={300}
                    alt="171x180"
                    src="/NumberSystem-pictures/NumberSystems.png"
                />
                <Figure.Caption>
                    Java number system yes
                </Figure.Caption>
            </Figure>

            <Figure style={{float: "right", margin: "3%"}}>
                <Figure.Image
                    width={500}
                    height={300}
                    alt="171x180"
                    src="/NumberSystem-pictures/NumberSystems.png"
                />
                <Figure.Caption>
                    Java number system yes
                </Figure.Caption>
            </Figure>


        </section>
    )
}

export default LayerThree