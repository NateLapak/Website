import "./FirstLayer.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {AiOutlineMail} from "react-icons/ai"
import { useState } from "react"


const FirstLayer = () => {

    // State to handle the first input (name or email address)
    const [Labelstate, LabelsetState] = useState("")

    // State to handle the message (textarea)
    const [MessageState, setMessageState] = useState("")

    // Handle and update the state of the name/email input
    const handleLabelChange = (event) => {
        LabelsetState(event.target.value)
    }

    // Handle and update the state of the message input
    const handleMessageChange = (event) => {
        setMessageState(event.target.value)
    }   

    // Handle when the area has been submitted
    const handleSubmit = (event) => {
        LabelsetState(Labelstate)
        setMessageState(MessageState)
        alert("Thanks for the message!")
    }

    return (
        <div className="container FirstLayer col-lg-10 col-md-8 col-sm-6">

            {/* Heading for contact page */}
            <h1>Contact or message me directly.</h1>

            {/* Form for contact page. */}
            <Form className="FirstLayer-form">

            {/* Form and input area for name or email address */}
            <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Email address or name</Form.Label>
                <Form.Control
                    onChange={handleLabelChange}
                    value={Labelstate}
                    type="email" 
                    placeholder="name or email address" 
                    />
            </Form.Group>

            {/* Form and input area for the textarea and message */}
            <Form.Group className="mb-3" controlId="ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} value={MessageState} onChange={handleMessageChange} placeholder="Enter message here"/>
            </Form.Group>
            </Form>

            {/* Button to submit information */}
            <Button className="FirstLayer-button" variant="dark" onClick={handleSubmit}>Submit</Button>

            {/* Email */}
            <h3>If you want to message me through email, email me nathan.lapak@gmail.com. <AiOutlineMail /> </h3>
            <h3>Thanks for reaching out</h3>
        </div>
    )
}

export default FirstLayer