import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import "./MovieRental.css"

import NextLogo from "../../Images/MovieRentalAppImg/NextJSLogo.png"
import tailwind from "../../Images/MovieRentalAppImg/tailwind.jpg"

import SampleCode from "../../Images/MovieRentalAppImg/Sample-movie-code.jpg"
import Frontpage from "../../Images/MovieRentalAppImg/HomepageView.jpg"

import {BiCameraMovie} from "react-icons/bi"

const MovieRental = () => {

    const [open, setOpen] = useState(false);
    
    return (

        <div className="NumberSystems container col-lg-10 col-md-10 col-sm-4">

            {/* Header */}
            <div className="header">
                <h1>Project 2: Movie Rental <BiCameraMovie /></h1>
                <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                    Click to expand!
                </Button>
            </div>

            {/* Actual content */}
            <Collapse in={open}>
                <div className='NumberSystem-content'>
                    <h2>"Rent your favorite movies online"</h2>
                    <img src={NextLogo} className="w-50 p-5" alt=""></img>
                    <img src={tailwind} className="w-50 p-5" alt=""></img>

                    <h2>Example code and front page of the website</h2>
                    <img src= {SampleCode} className="w-50 p-5" alt=""></img>
                    <img src= {Frontpage} className="w-50 p-5" alt=""></img>

                    <h1>Project description</h1>
                    <p>
                        The movie rental application was built for the Macewan CS hackathon 2022. I collaborated
                        with other computer science students at Macewan University to build this project. As the name implies,
                        this website allows users to rent movies online. These movies are fetched from the movie database API
                        and rendered dynamically in NextJS. Since NextJS requires routing and API handling, there was no backend 
                        framework implemented for this project.
                        <br />
                        I was responsible for building and designing the front-end and helped fetch and dynamically render data
                        from the Movie Database API to our website.
                    </p>

                    {/* Buttons that link to earsketch's websites */}
                    <Button className="m-3" href="https://github.com/NateLapak/Movie-Rental-TS">Github repo</Button>
                    <Button className="m-3" href="https://movie-rental-ts.vercel.app/">Deployment</Button>
                </div>
            </Collapse>
        </div>
    )
}

export default MovieRental