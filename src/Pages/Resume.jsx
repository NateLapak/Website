import resumePDF from "../Images/Resume.pdf";
import resume from "../Images/Resume.jpg";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="p-5 container-fluid text-center resume">
      <div className="container col-lg-8 col-md-8 col-sm-8">
        <h3 className="my-5">
          Here is my resume.
          <br />
          Click <a href={resumePDF}>here</a> for the PDF version.
        </h3>
        <img alt="" src={resume}></img>
      </div>
    </div>
  );
};

export default Resume;
