import {Card, Button} from "react-bootstrap"
import {Route, Navigate} from "react-router-dom"

import IOSDevLogo from "../../Images/IOS-web-pictures/IOS-dev.png"
import MLlogo from "../../Images/ML-pictures/Neural-network.webp" 

import "./FinalLayer.css"

const FinalLayer = () => {
    return (
        <div className="final-layer">
            <h1 className="final-layer-header">Goals and current projects</h1>

            <Card border="dark" style={{ width: '20rem', float: "right", marginRight: "2%"}}>
            <Card.Img variant="top" src={IOSDevLogo} />
            <Card.Body>
                <Card.Title>IOS development</Card.Title>
                <Card.Text>
                Learning Ios development sounds interesting to me and 
                it will be fun developing and publishing ios apps. 
                </Card.Text>
                <Button variant="primary" href="https://github.com/NateLapak/To-do-list">To-do list repository</Button>
            </Card.Body>
            </Card>
            
            <Card border="dark" style={{ width: '20rem', height: "31rem", marginLeft: "2%"}}>
            <Card.Img variant="top" src={MLlogo} />
            <Card.Body>
                <Card.Title>Learn ML and AI</Card.Title>
                <Card.Text>
                One of my current goals is to become proficient in machine learning and 
                artificial intelligence. I enjoyed making my neural network handwritten
                project and it will be beneficial in the future.
                </Card.Text>
                <Button variant="primary" href="https://github.com/NateLapak/Handwritten-digit-using-neural-networks">
                    ML neural network project
                </Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default FinalLayer;