import "./FirstLayer.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {AiOutlineMail} from "react-icons/ai"


const FirstLayer = () => {

    return (
        <div className="container FirstLayer col-md-8 col-sm-6">
            <h1>Contact or message me directly.</h1>

            <Form className="FirstLayer-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address or name</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>

            <Button className="FirstLayer-button" variant="dark">Submit</Button>

            <h3>For business inquries, email me nathan.lapak@gmail.com. <AiOutlineMail /> </h3>
            <h3>Thanks!</h3>
        </div>
    )
}

export default FirstLayer