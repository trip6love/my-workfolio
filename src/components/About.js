import pic from "../../assets/jaw.JPG";

function About() {
    return (
        <div className="container-about">
            <h1 className="about-header">About Me</h1>
                <div className="about">
                    <img 
                        alt="Error Profile Picture" 
                        src={pic} className="picture"
                    ></img>
            <p className="about-text">Hello! My name is Lane Byers and I am currently enrolled at the UNC Coding Bootcamp. 
            This portfolio was created with a new skill; REACT! I want to continue my passions as a web developer, specifically front end.
            Currently I live in Raleigh, North Carolina. Here I enjoy skateboarding, and being outdoors with the friends close to me!</p>
        </div>
        </div>
    )
}

export default About