import "./Django.css"
import React from "react"

import DjangoLogo from "../../Images/DjangoImages/DjangoLogo.png"
import ReactLogo from "../../Images/DjangoImages/ReactLogo.png"

const Django = () => {
    return (
        <div className="django container">

            {/* Header of section */}
            <h1>Django and Backend Development</h1>
            <h4>September 10, 2022</h4>

            <hr></hr>

            {/* Images and sub-title */}
            <h2>Learning to combine Django and React</h2>
            <div className="djangoImages">
                <img src={DjangoLogo} alt=""></img>
                <img src={ReactLogo} alt=""></img>
            </div>
            
            {/* Description */}
            <div className="djangoInfo">
                <h3>What is Django and Backend Development?</h3>
                <p>
                    Django is a back-end framework that based in Python. Although there are several different 
                    back-end frameworks, I decided to learn Django because I like Python and researched that Django was
                    a growing framework in industry. Back-end development deals with the server-side and database aspects
                    of a web application. Things like backend routing, storing and querying data from the database and
                    login authentication are done on the backend.
                </p>
                
                <h3>Why am I learning it?</h3>
                <p>
                    After learning front-end development, it felt natural to move on to the backend. I wanted to learn
                    how to do backend functionality such as storing and retriving data, authenticating users to login, 
                    implement a search query, etc. To do this, I had to learn how to implement the REST api using the
                    django rest framework. I am currently working on a couple of full-stack web applications and
                    would like to publish one to the web in the future.
                </p>

            </div>
        </div>
    )
}

export default Django