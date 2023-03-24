import "./Kaggle.css"

import Button from 'react-bootstrap/Button'

const Kaggle = () => {
    return (

        <div className="ML container">

            {/* Currently learnign section */}
            <div>

                {/* Heading */}
                <h1>Kaggle, Data Analysis and ML</h1>
                <h4>August 8, 2022</h4>

                <hr></hr>

                {/* Subheading for machine learning */}
                <h2>Beginning to learn ML</h2>
                <div className="kaggle">
                    <img src="" alt=""></img>
                    <img src="" alt=""></img>
                </div>

                {/* Brief description about machine learning */}
                <div>
                    <h3>What is Machine Learning and Kaggle?</h3>
                    <p>
                        Machine Learning aims to build a model that learns from a dataset to make 
                        predictions or descisions without having to be told explictely through 
                        a program. Kaggle is a popular online community of data scientists and
                        machine learners. They have courses for all skill levels, competitions and 
                        datasets to be used in ML projects.
                    </p>
                    <h3>Why am I learning it?</h3>
                    <p>
                        I've considered becoming a data scientist once im done university and learning data analysis, 
                        visualization and machine learning beforehand will help me in the future. I am also
                        learning because it's fun to learn new skills and understand the emerging field of
                        AI and ML. So far, it's quite challenging but it will be worth it in the long-term.
                    </p>
                </div>

                {/* Button that links to my kaggle profile picture */}
                <Button href="https://www.kaggle.com/nathanlapak" variant="dark">Kaggle profile</Button>
            </div>

        </div>
    )
}

export default Kaggle;