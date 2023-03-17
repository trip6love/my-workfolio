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
            <p className="about-text">Hello! My name is Lane Byers and I am currently a freelance website developer living in North Carolina. 
            You will be able to view current work of mine while I work on new projects. For any future graphic or web design work 
            please feel free to contact me at 919-621-6956 or lanebyers13@gmail.com.
            </p>
        </div>
        </div>
    )
}

export default About;