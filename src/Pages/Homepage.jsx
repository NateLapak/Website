import FirstLayer from "../Components/Homepage/FirstLayer"
import HealthHackED from "../Components/Projects/HealthHackED"
import MovieRental from "../Components/Projects/MovieRental" 

const Homepage = () => {
    return (
        <div>
            <FirstLayer></FirstLayer>
            <HealthHackED></HealthHackED>
            <MovieRental />
        </div>
    )
}

export default Homepage