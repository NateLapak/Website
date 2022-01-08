import Carousel from 'react-bootstrap/Carousel'
import "./Projects.css"

const Projects = () => {
  return (
      <section className="projects">
          <h1 className="projects-main-header">Example projects</h1>
            
          <Carousel>
            <Carousel.Item interval={1000}>
               <img
                className="d-block w-100"
                src="/Pong.png"
                alt="First slide"
              />
            <Carousel.Caption>
              <h3>Pong game in unity</h3>
              <p>First game devlopment project</p>
            </Carousel.Caption>
           </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="earsketch-img"
                  src="/EarSketch.png"
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
                  src="/NumberSystems.png"
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