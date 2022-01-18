import Carousel from 'react-bootstrap/Carousel'
import LayerOne from "../../../Components/Projects/Main/LayerOne"
import "./Projects.css"

import PongGame from "../../../Images/GameDev-pictures/Pong-gameplay.png"

const Projects = () => {
  return (
      <section className="projects">
          <LayerOne />
          <Carousel>
            <Carousel.Item interval={1000}>
               <img
                className="d-block w-100"
                src={PongGame}
                alt="First slide"
              />
            <Carousel.Caption>
              <h3>Pong game in unity</h3>
              <p>First game devlopment project</p>
            </Carousel.Caption>
           </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/EarSketch-pictures/EarSketch.png"
                  alt="Second slide"
                />
                <Carousel.Caption className="earsketch-text">
                  <h3>Music with Earsketch</h3>
                  <p>Implemented using Python</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/NumberSystem-pictures/NumberSystems.png"
                  alt="Third slide"
                />
                <Carousel.Caption className="numberSystems-text">
                  <h3>Number Systems</h3>
                  <p>Made with java!</p>
                </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
        </section>
    )
}

export default Projects