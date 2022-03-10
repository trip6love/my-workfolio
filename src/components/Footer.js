import hubpic from "../assets/images/hub.png" ;
import linkpic from "../assets/images/link.png";
import stackpic from "../assets/images/stack.jpg";

function Footer()  {
    return(
        <div className="footer-container">
        <h1 className="footer">[Portfolio Made With React]</h1>
        <a href="https://github.com/trip6love" target="_blank" rel='noreferrer'>
        <img 
            src= {hubpic}
            alt="github"
            className="logo"/>
        </a>

        <a href="https://www.linkedin.com/in/lane-byers-2a199a221/" target="_blank" rel='noreferrer'>
        <img 
            src= {linkpic}
            alt="linkedin"
            className="logo"/>
        </a>

        <a href="https://stackoverflow.com/users/17027761/trip6love" target="_blank" rel='noreferrer'>
        <img 
            src= {stackpic}
            alt="stackoverflow"
            className="logo"/>
        </a>

        </div>
    )
}

export default Footer