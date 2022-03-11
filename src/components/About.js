import pic from "../assets/images/error.png";

function About() {
    return (
        <div className="container-about">
            <h1 className="about-header">About Me</h1>
                <div className="about">
                    <img 
                        alt="Error Profile" 
                        src={pic} className="picture"
                    ></img>
            <p className="about-text">Hello! My name is Lane Byers and I am currently enrolled at the UNC Coding Bootcamp. 
            This portfolio was created with a new skill; REACT! I want to continue my passions as a web developer, specifically front end. For future work 
            please feel free to contact me! 
            </p>
        </div>
        </div>
    )
}

export default About;