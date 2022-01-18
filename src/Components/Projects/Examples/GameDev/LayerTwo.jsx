import "./LayerTwo.css"

import gamePicture from "../../../../Images/GameDev-pictures/Pong-gameplay.png"
import gameCode from "../../../../Images/GameDev-pictures/Pong-code.png"

const LayerTwo = () => {
    return (
        <section className="pong">
            <h1>Project 1: Pong Game</h1>
            <p>Pong made in the unity engine. Scripting language used was C#</p>
            <h4>Click <a href="https://github.com/NateLapak/Pong-game">here</a> for the github repository</h4>

            <img className="game-picture" src={gamePicture} width="40%" height="50%" alt=""></img>
            <img className="game-code" src={gameCode} width="40%" height="50%" alt=""></img>
        </section>
    )
}

export default LayerTwo