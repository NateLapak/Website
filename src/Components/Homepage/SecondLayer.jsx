import "./SecondLayer.css"
import ML from "../../Images/HomepageImages/ML.jpg"
import Kaggle from "../../Images/HomepageImages/Kaggle.png"
import Button from 'react-bootstrap/Button'

const SecondLayer = () => {
    return (
        <div className="ML">
            <div className="container col-md-8 col-sm-6">
                <h1>What I'm currently doing</h1>

                <h2>Machine Learning on Kaggle</h2>
                <img className="w-50 p-5" src={ML} alt=""></img>
                <img className="w-50 p-5 " src={Kaggle} alt=""></img>

                <h3>What is Machine Learning and Kaggle?</h3>
                <p>
                    Machine Learning aims to build a model that learns from a dataset to make 
                    predictions or descisions without having to be told explictely through 
                    a program. Kaggle is a popular online community of data scientists and
                    machine learners. They have courses for all skill levels, competitions and 
                    datasets to be used in ML projects.
                </p>

                <Button href="https://www.kaggle.com/nathanlapak" variant="dark">Kaggle profile</Button>
            </div>

        </div>
    )
}

export default SecondLayer;