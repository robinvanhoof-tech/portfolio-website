import React from "react";
import ProjectCard from "./projectCard";


import Banner from '../../assets/images/banner.png'

// Portfolio site
import Portfolio_Logo from '../../assets/images/logo.png'

// Ordio
import Ordio_Demo1 from '../../assets/images/Ordio_Demo1.gif'
import Ordio_Development_Page from '../../assets/images/Ordio_Development_Page.png'

// Eeventify

// Rogue Anomaly
import RA_Banner from '../../assets/images/RA_Banner.png'

// Black Sails at Midnight
import BSAM_Banner from '../../assets/images/BSAM_Banner.png'

import './projects.scss';

const Projects = () => {
    return (
        <div className="projects-page">
            <div className="project-list">
                <ProjectCard bannerImg={Portfolio_Logo} name="Portfolio Site"
                    description="My portfolio site is one of the first pure web development projects I have made. The webpage is made using the React framework using HTML, SCSS and JavaScript."
                    skills={["React", "JavaScript", "HTML", "SCSS", "Web development"]}                    
                    gitLink="https://github.com/robinvanhoof-tech"
                    images={[]}
                >

                </ProjectCard>
                
                <ProjectCard bannerImg={Banner} name="Ordio Platform"
                    description="Ordio is a platform that I individually developed for an academic project. The platform is service that restaurant owners can use to upload their menu's, which can then be accessed through APIs by third party applications to utilize in many different ways, for example ordering systems."
                    skills={["API micoservices", "ASP.NET", "C#", "Containerization", "React", "JavaScript", "HTML", "CSS", "Full stack development"]}
                    liveLink="https://ordio.robinvanhoof.tech"
                    gitLink="https://github.com/FHICT-Ordio"
                    images={[{media: Ordio_Demo1, text: "Demo"}, {media: Ordio_Development_Page, text: "API Documentation for use of the Ordio platform"}]}
                    links={[{url: "https://github.com/FHICT-Ordio/general/blob/main/Portfolio/IP/Products%20and%20learning%20outcomes.md", text: "In-depth technical documentation"}, {url: "https://frontend.ordio.robinvanhoof.tech/", text: "Simple menu display implementation using Ordio API"}]}
                >
                    <div>
                        <p>
                            Ordio is an innovative universal platform that allows restaurant owners to take their menus to the digital space. Ordio provides a digital environment that restaurant owner can put their menus on. These menus can then be shared with third party applications using API's using secured tokens. These third party platforms can use the data in whatever way they want to do whatever they want with it. Think of online ordering systems, digital tableside ordering and so on.
                        </p>
                        <br />
                        
                        <p>
                            Ordio does not natively offer any of these before-mentioned applications: it is a platform that provides other applications with data needed to make such implementations possible. It does so through secured API endpoints which can be integrated using the online API Wiki provided on the Admin webpage. 
                        </p>
                        <br />

                        <p>
                            The platform integrates Auth0 identification to provide restaurant owners with a safe and secure environment that cannot be accessed without the proper credentials.
                        </p>
                    </div>
                </ProjectCard>

                <ProjectCard bannerImg={Banner} name="Eeventify Platform"
                    description="Eeventify is a group project me and a group of international developers created for an academic project. The platform is a social app that users can use to create, find and join social events with others in their environment. The platform also offers API endpoints for use of data in other applications."
                    skills={["API micoservices", "Microservice management", "ASP.NET", "C#", "Containerization", "International partnerships", "React", "JavaScript", "Full stack development"]}
                    liveLink="https://eeventify.robinvanhoof.tech"
                    gitLink="https://github.com/Eeventify"
                    images={[]}
                >

                </ProjectCard>

                <ProjectCard bannerImg={RA_Banner} name="Rogue Anomaly"
                    description="Rogue Anomaly is my first project in Game Development. The game is the result of a gamejam-like project designed and developed in a six-man group. The game is develped in the Unity game engine. Rogue Anomaly is a fast paced rogue-like dungeon crawler set in a futuristic space theme. The player uses an array of weapons, spells and abilities to make their way through a spaceship and defeat the final boss to take back control of their mothership."
                    skills={["Game Development", "Game Design", "Unity", "C#", "High-pace development"]}
                    liveLink="https://fontys-gdt.itch.io/rogue-anomaly"
                    gitLink="https://github.com/Black-Sails-at-Midnight/Black-Sails-at-Midnight"
                    images={[]}
                >
 
                </ProjectCard>

                <ProjectCard bannerImg={BSAM_Banner} name="Black Sails at Midnight"
                    description="Black Sails at Midnight is my second project in Game Development. The entire game is designed and developed in a two man group. The game is develped in the Unity game engine. Black Sails at Midnight is an innovative Tower Defence and First Person Shooter hybrid set in the golden age of piracy."
                    skills={["Game Development", "Game Design", "Unity", "C#"]}
                    liveLink=""
                    gitLink="https://github.com/Black-Sails-at-Midnight/Black-Sails-at-Midnight"
                    images={[{media: BSAM_Banner, text: "Test"}, {media: Banner, text: "Text2"}]}
                >
                  
                </ProjectCard>
            </div>  
        </div>
    )
}

export default Projects;