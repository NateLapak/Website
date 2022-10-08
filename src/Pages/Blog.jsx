import Kaggle from "../Components/Blog/Kaggle"
import Django from "../Components/Blog/Django"
import Cybersecurity from "../Components/Blog/Cybersecurity"

const Blog = () => {
    return (
        <div>
            <Cybersecurity />
            <hr />
            <Django />
            <hr />
            <Kaggle />
        </div>
    )
}

export default Blog