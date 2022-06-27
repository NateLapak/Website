import "./SecondLayer.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import earsketch from "../../Images/HomepageImages/earsketch.png"
import MernStack from "../../Images/HomepageImages/MernStack.jpg"


const SecondLayer = () => {
    return (
        <div className="projects-examples">
            <h1 className="projects-examples-header">
                Check out a few of my projects!
            </h1>

            <Card bg="light" border="dark" style={{ width: '18rem', float: "left", marginLeft: "20%", marginRight: "20%" }}>
            <Card.Img variant="top" src={earsketch} />
            <Card.Body>
                <Card.Title>Earsketch</Card.Title>
                <Card.Text>
                Runner-up of the Amazon Future Enginner Earsketch competition in Canada!
                </Card.Text>
                <Button variant="primary">Earsketch section</Button>
            </Card.Body>
            </Card>

            <Card bg="light" border="dark" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={MernStack}/>
            <Card.Body>
                <Card.Title>MERN stack website</Card.Title>
                <Card.Text>
                This website was made using the MERN tech stack. Check out it's github repository
                below!
                </Card.Text>
                <Button variant="primary" href="https://github.com/NateLapak/Website"> Website repository</Button>
            </Card.Body>
            </Card>

        </div>
    )
}

export default SecondLayer;