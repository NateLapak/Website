import {Routes, Route} from "react-router-dom"
import AIandML from "../Examples/AIandML"
import GameDev from "../Examples/GameDev"
import IOSandWeb from "../Examples/IOS-Web"
import Miscellaneous from "../Examples/Miscellaneous"

const Projects = () => {
    return (
        <section>
            <h1>Main Project page</h1>
            <Routes>
                <Route path="AI-ML" element={<AIandML />} />
                <Route path="game-dev" element={<GameDev />} />
                <Route path="IOS-web" element={<IOSandWeb />} />
                <Route path="Miscellaneous" element={<Miscellaneous />} />
            </Routes>
        </section>
    )
}

export default Projects