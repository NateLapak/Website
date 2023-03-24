import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import "./HealthHackED.css"
import {GiLungs} from "react-icons/gi"

import UofALogo from "../../Images/HealthHackED-images/UofA-logo.png"
import HackathonLogo from "../../Images/HealthHackED-images/HackED-2023.jpg"
import Spirometer from "../../Images/HealthHackED-images/Spirometer.jpg"
import SampleCode from "../../Images/HealthHackED-images/Sample-code.jpg"
import Frontpage from "../../Images/HealthHackED-images/Front-page.jpg"


const HealthHackED = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="container col-lg-10 col-md-10 col-sm-4">
            
            <div className="showcase">
                <h1><b>Project showcase</b></h1>
                <h4>Here, you can find my best works and accomplishments</h4>
            </div>

            <div className="HealthHackED">

                <div>
                    <div className='header'>
                        <h1>Project 1: HealthHackED <GiLungs /></h1>
                        <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                            Click to expand!
                        </Button>
                    </div>

                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <h3><i>"Determine your lung health given user's height, ethnicity and spirometer data"</i></h3>
                            <img src={UofALogo} className="w-25 p-4" alt=""></img>
                            <img src={HackathonLogo} className="w-25 p-4" alt=""></img>
                            <img src={Spirometer} className="w-25 p-4" alt=""></img>
                            
                            <h2><b>Sample code and front-page</b></h2>
                            <img className="w-50 p-5" src={SampleCode} alt=""></img>
                            <img className="w-50 p-5" src={Frontpage} alt=""></img>


                            <h2>What is HealthHackED?</h2>
                            <p>
                                HealthHackED is a project developed by me and four other members from the computer science and engineering
                                faculties at the University of Alberta. The purpose of the website is to inform the user if their lung health
                                is normal or abnormal. The website takes in user information such as height, age and ethnicity and sends that data
                                to the backend. In the backend, our group took a dataset and used data analysis to determine what factors contribute to healthy or unhealthy lungs.
                                Then, the user data is compared with the data analyzed from the dataset to inform the user if their lung health is healthy or abnormal.

                                <br />
                                I was responsible for building and designing the front-end using React and Chakra UI. I also helped setup the flask server
                                so that data can be sent between the front-end and the back-end.
                            </p>

                            <Button className="m-3" href="https://github.com/RomanCui/HealthHackED">Github Repository</Button>
                            <Button className="m-3" href="https://devpost.com/software/healthhacked">Devpost Competition</Button>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
        
    )
}

export default HealthHackED