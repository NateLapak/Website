import "./Newpost.css"

const Newpost = () => {

    return(

        <div className="newpost container">

                {/* Header of section */}
                <h1>ChessCanada project</h1>
                <h4>March 2023</h4>

                <hr></hr>

                
                {/* Description */}
                <div className="newpostInfo">
                    <h3>Update</h3>
                    <p>
                        I have been accepted to the University of Alberta and I will be starting Fall 2023! I am currently attending 
                        MacEwan University and have been busy with school work lately. Despite this, I have started
                        working on a website called Chesscanada; a website similar to Lichess in that it will be open-source.
                        This website aims to build the chess community in Canada and I will be building the site
                        using Flask, React, ChakraUI, and external API's such as the ones from Lichess.
                        Hopefully, I will have it done by the end of the summer!
                    </p>
                    

                </div>
            </div>

    )
}

export default Newpost