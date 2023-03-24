
import Django from "../Components/Blog/Django"
import Cybersecurity from "../Components/Blog/Cybersecurity"
import Newpost from "../Components/Blog/Newpost"

const Blog = () => {
    return (
        <div>
            <Newpost/>
            <hr/>
            <Cybersecurity />
            <hr />
            <Django />
            <hr />
        </div>
    )
}

export default Blog