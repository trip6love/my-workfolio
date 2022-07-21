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
            <p className="about-text">Hello! My name is Lane Byers and I am currently a freelance website developer. 
            Here you will be able to find current work of mine while I work on new projects. For any future graphic or web design work 
            please feel free to contact me! 
            </p>
        </div>
        </div>
    )
}

export default About;