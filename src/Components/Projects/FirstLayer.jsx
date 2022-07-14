import "./Firstlayer.css"
import {ImMusic} from "react-icons/im"
import {FaFileAudio} from "react-icons/fa"

import earsketchCode from "../../Images/EarSketch-pictures/EarSketch-code.png"
import earsketch from "../../Images/EarSketch-pictures/EarSketch.png"
import earsketchSong from "../../Images/EarSketch-pictures/EarsketchSong.mp3"

import Button from 'react-bootstrap/Button'

const FirstLayer = () => {
    return (
        <div className="earsketch">

            {/* Earsketch section */}
            <div className="container col-lg-10 col-md-10 col-sm-4">
                
                <h1>Earsketch <ImMusic /></h1>
                <h3><i>Music created through code</i></h3>
                
                {/* Images and title */}
                <h1><b>Python code and the DAW (Digital audio workstation)</b></h1>
                <img className="w-50 p-5" src={earsketchCode} alt=""></img>
                <img className="w-50 p-5" src={earsketch} alt=""></img>

                {/* About section */}
                <h2>What is Earsketch?</h2>
                <p>
                    Earsketch is an educational programming environment used to teach students
                    code through composing and remixing music. The song I composed was for a competition
                    sponsored by Amazon where students from Canada create a song which will be judged by
                    musicians, computer scientists, etc. My song ended up taking runner-up for the competition
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
        </div>
    )
}

export default FirstLayer