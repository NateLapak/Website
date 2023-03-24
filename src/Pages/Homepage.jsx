import FirstLayer from "../Components/Homepage/FirstLayer"
import HealthHackED from "../Components/Projects/HealthHackED"
import Earsketch from "../Components/Projects/Earsketch"
import MovieRental from "../Components/Projects/MovieRental" 

const Homepage = () => {
    return (
        <div>
            <FirstLayer></FirstLayer>
            <HealthHackED></HealthHackED>
            <Earsketch />
            <MovieRental />
        </div>
    )
}

export default Homepage