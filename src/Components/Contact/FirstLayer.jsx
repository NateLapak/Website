import { Button } from "react-bootstrap"
import "./FirstLayer.css"

const FirstLayer = () => {

    const onEmailHandler = () => {
        alert("My email is nathan.lapak@gmail.com");
    }


    return (
        <section className="contact">
            <h2 className="contact-head">Contact me on popular platforms</h2>
            <Button className="contact-button" variant="primary">
                <a className="github" href="https://github.com/NateLapak">
                    Github
                </a>
            </Button>
            {/* <Button className="contact-button" variant="primary">
                <a href="https://ca.linkedin.com/in/nathan-lapak-a88b2118a" className="linkedin">
                    Linkedin
                </a>
            </Button> */}

            <Button className="contact-button" variant="primary">
                <a className="email" onClick={onEmailHandler}>
                    Email
                </a>
            </Button>

        </section>
    )
}

export default FirstLayer