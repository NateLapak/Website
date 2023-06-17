import ResumeImage from "../Images/Resume.jpg"

const Resume = () => {
    return (
        <div className="p-5 container-fluid text-center">

            <div className="container col-lg-8 col-md-8 col-sm-8">
                <h2>Here is my resume <br /> Click <a href="https://docdro.id/f25c3gw">here</a> for the PDF file.</h2>
                <img className="w-75 m-5 mt-5 border border-secondary" src={ResumeImage} alt=""></img>
            </div>
        </div>
    )
}

export default Resume