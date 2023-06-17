import FirstLayer from "../Components/Homepage/FirstLayer"
import HealthHackED from "../Components/Projects/HealthHackED"
import Earsketch from "../Components/Projects/Earsketch"
import MovieRental from "../Components/Projects/MovieRental" 
import Technologies from "../Components/Homepage/Technologies"

const Homepage = () => {
    return (
        <div>
            <FirstLayer></FirstLayer>
            <Technologies />
            <HealthHackED></HealthHackED>
            <Earsketch />
            <MovieRental />
        </div>
    )
}

export default Homepage