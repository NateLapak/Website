import {Card, Button} from "react-bootstrap"
import "./FinalLayer.css"

const FinalLayer = () => {
    return (
        <div className="final-layer">
            <h1 className="final-layer-header">Goals and current projects</h1>

            <Card style={{ width: '20rem', float: "right"}}>
            <Card.Img variant="top" src="/IOS-web-pictures/IOS-dev.png" />
            <Card.Body>
                <Card.Title>IOS development</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            
            <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src="/ML-pictures/Neural-network.webp" />
            <Card.Body>
                <Card.Title>Learn ML and AI</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default FinalLayer;