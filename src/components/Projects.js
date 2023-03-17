import React, { useState } from 'react';



const Projects = ({ sites }) => {
    const [pics] = useState([
      
        
        {
            name: "",
            github: "https://github.com/khaoulaja/game-collection",
            deployed: "https://afternoon-reef-79835.herokuapp.com",
        },

        {
            name: "",
            github: "",
            deployed: "https://www.pentoninsurance.org/",
        },

        {
            name: "",
            github: "",
            deployed: "https://www.runningrevolution.com/",
        },

        {
            name: "",
            github: "",
            deployed: "https://www.drtracyhappinessladder.com/",
        },
        
        
        
    ])

    const recentSites = pics.filter(pic => pic.sites === sites);
        return(
            <div className="project-container">
                <h1 className="project-header"></h1>
            {recentSites.map((image, i) => (
                <div key={image.name} className ="project-div">
                    <h2 className="pic-name">{image.name}</h2>
                    <a href={image.deployed} target="_blank" rel='noreferrer' className="ahref">
                    <img
                    src={require(`../assets/images/${i+1}.png`)}
                    alt={image.name}
                    key={image.name}
                    className="work-image"
                 />
                 </a>
                
                </div>
            ))}
            </div>
        )
    }

export default Projects