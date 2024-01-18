import FirstLayer from "../Components/Homepage/FirstLayer"
import ReceiptApp from "../Components/Projects/ReceiptApp"
import Earsketch from "../Components/Projects/Earsketch"
import MovieRental from "../Components/Projects/MovieRental" 
import Technologies from "../Components/Homepage/Technologies"

const Homepage = () => {
    return (
        <div>
            <FirstLayer></FirstLayer>
            <Technologies />
            <ReceiptApp />
            <Earsketch />
            <MovieRental />
        </div>
    )
}

export default Homepage