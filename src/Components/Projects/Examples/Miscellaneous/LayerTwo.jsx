import "./LayerTwo.css"

const LayerTwo = () => {
    return (
        <section className="EarSketch">
            <h1>Project 1: Music Made With Earsketch</h1>
            <p>
                Made my own song using earsketch. Implemented by using 
                python to mix different sounds from a sound collection
            </p>
            <h4>Click <a href="https://github.com/NateLapak/EarSketch-project">here</a> for the github repository.</h4>

            <div className="pictures">
                <img className="Earsketch-ex" src="/EarSketch-pictures/EarSketch.png" width="40%" height="50%" alt=""></img>
                <img className="Earsketch-code" src="/EarSketch-pictures/EarSketch-code.png" width="40%" height="50%" alt=""></img>
            </div>

        </section>
    )
}

export default LayerTwo