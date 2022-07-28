import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import "./Earsketch.css"
import {ImMusic} from "react-icons/im"
import {FaFileAudio} from "react-icons/fa"

import PythonLogo from "../../Images/HomepageImages/Python.png"
import EarsketchLogo from "../../Images/EarSketch-pictures/EarsketchLogo.png"
import AmazonFuture from "../../Images/EarSketch-pictures/AmazonFuture.png"

import earsketchCode from "../../Images/EarSketch-pictures/EarSketch-code.png"
import earsketch from "../../Images/EarSketch-pictures/EarSketch.png"
import earsketchSong from "../../Images/EarSketch-pictures/EarsketchSong.mp3"


const Earsketch = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="container col-lg-10 col-md-10 col-sm-4">
            

            <div className="showcase">
                <h1><b>Project showcase</b></h1>
                <h4>Here, you can find my best works and accomplishments</h4>
            </div>

            <div className="earsketch">

                {/* Earsketch section */}
                <div>

                    <div className='header'>
                        <h1>Project 1: Earsketch <ImMusic /></h1>
                        <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                            Click to expand!
                        </Button>
                    </div>

                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <h3><i>"Music created through code"</i></h3>
                            <img src={PythonLogo} className="w-25 p-4" alt=""></img>
                            <img src={EarsketchLogo} className="w-25 p-4" alt=""></img>
                            <img src={AmazonFuture} className="w-25 p-4" alt=""></img>
                            
                            {/* Images and title */}
                            <h2><b>Python code and the DAW (Digital audio workstation)</b></h2>
                            <img className="w-50 p-5" src={earsketchCode} alt=""></img>
                            <img className="w-50 p-5" src={earsketch} alt=""></img>

                            {/* About section */}
                            <h2>What is Earsketch?</h2>
                            <p>
                                Earsketch is an educational programming environment used to teach students
                                code through composing and remixing music. The song I composed was for a competition
                                sponsored by Amazon where students from Canada create a song which will be judged by
                                musicians, computer scientists, etc. My song ended up taking <a href="https://amazonfutureengineer.ca/your-voice-is-power-fall-2021-winners-announced/">runner-up</a> for the competition
                                and I won a 250$ amazon gift card.
                                To learn more about the competition,
                                click the button below. 
                            </p>
                            
                            {/* Audio for song */}
                            <div className="earsketch-audio">
                                <h5>Audio for my song <FaFileAudio /></h5>
                                <audio controls>
                                    <source src={earsketchSong} type="audio/mpeg"></source>
                                </audio>
                            </div>

                            {/* Buttons that link to earsketch's websites */}
                            <Button className="m-3" href="https://earsketch.gatech.edu/landing/#/">Earsketch Website</Button>
                            <Button className="m-3" href="https://www.amazonfutureengineer.com/yourvoiceispower">Earsketch Competition</Button>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
        
    )
}

export default Earsketch