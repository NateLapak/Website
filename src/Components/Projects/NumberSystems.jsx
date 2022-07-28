import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import "./NumberSystems.css"

import Java from "../../Images/NumberSystemsImg/Java.jpg"
import Number from "../../Images/NumberSystemsImg/Number.png"
import Code from "../../Images/NumberSystemsImg/NumberSysCode.png"

import {VscFileBinary} from "react-icons/vsc"

const NumberSystems = () => {

    const [open, setOpen] = useState(false);
    
    return (

        <div className="NumberSystems container col-lg-10 col-md-10 col-sm-4">

            {/* Header */}
            <div className="header">
                <h1>Project 2: Number Systems <VscFileBinary /></h1>
                <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                    Click to expand!
                </Button>
            </div>

            {/* Actual content */}
            <Collapse in={open}>
                <div className='NumberSystem-content'>
                    <h4>Converts decimal to other number systems</h4>
                    <img src={Java} className="w-50 p-5" alt=""></img>

                    <h2>Different number systems and Java code</h2>
                    <img src= {Number} className="w-50 p-5" alt=""></img>
                    <img src= {Code} className="w-50 p-5" alt=""></img>

                    <h1>Project description</h1>
                    <p>
                        Number systems is a program that converts a number in decimal
                        and displays a table of the number equivalent value in binary,
                        octal and hexadecimal. This was a fun school project that helped
                        develop my Java skills and knowledge of different number systems
                        relevant in computer science.
                    </p>

                    {/* Buttons that link to earsketch's websites */}
                    <Button className="m-3" href="https://github.com/NateLapak/Number-Systems">Github repository</Button>
                </div>
            </Collapse>
        </div>
    )
}

export default NumberSystems