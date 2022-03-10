import React, { useState } from 'react';



const Projects = ({ sites }) => {
    const [pics] = useState([
        {
            name: "",
            github: "https://github.com/trip6love/Challenge-03",
            deployed: "https://trip6love.github.io/Challenge-03/",
        },
        {
            name: "",
            github: "https://github.com/trip6love/Timed-Coding-Quiz",
            deployed: "https://trip6love.github.io/Timed-Coding-Quiz/",
        },
        {
            name: "",
            github: "https://github.com/trip6love/Work-Day-Scheduler",
            deployed: "https://trip6love.github.io/Work-Day-Scheduler/",
        },
        {
            name: "",
            github: "https://github.com/trip6love/where-is-the-money",
            deployed: "https://git.heroku.com/pure-bayou-47216.git",
        },
        {
            name: "",
            github: "https://github.com/trip6love/Noted-Pro",
            deployed: "https://noted-pro.herokuapp.com",
        },
        {
            name: "",
            github: "https://github.com/trip6love/Challenge-01",
            deployed: "https://trip6love.github.io/Challenge-01/",
        },
    ])

    const recentSites = pics.filter(pic => pic.sites === sites);
        return(
            <div className="project-container">
                <h1 className="project-header">My Work</h1>
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