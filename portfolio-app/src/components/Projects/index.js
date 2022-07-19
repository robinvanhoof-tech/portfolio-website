import React from "react";
import ProjectCard from "./projectCard";

import Logo from '../../assets/images/logo.png'
import Banner from '../../assets/images/banner.png'
import './projects.scss';

const Projects = () => {
    return (
        <div className="projects-page">
            <div className="project-list">
                <ProjectCard img={Logo} name="Portfolio Site"
                    description="My portfolio site is one of the first pure web development projects I have made. The webpage is made using the React framework using HTML, SCSS and JavaScript."
                    skills={["React", "JavaScript", "HTML", "SCSS", "Web development"]}                    
                    gitLink="https://github.com/robinvanhoof-tech"
                >
                    
                </ProjectCard>
                
                <ProjectCard img={Banner} name="Ordio Platform"
                    description="Ordio is a platform that I individually developed for an academic project. The platform is service that restaurant owners can use to upload their menu's, which can then be accessed through APIs by third party applications to utilize in many different ways, for example ordering systems."
                    skills={["API micoservices", "ASP.NET", "C#", "Containerization", "React", "JavaScript", "HTML", "CSS", "Full stack development"]}
                    liveLink="https://ordio.robinvanhoof.tech"
                    gitLink="https://github.com/FHICT-Ordio"
                >
                    
                </ProjectCard>

                <ProjectCard img={Banner} name="Eeventify Platform"
                    description="Eeventify is a group project me and a group of international developers created for an academic project. The platform is a social app that users can use to create, find and join social events with others in their environment. The platform also offers API endpoints for use of data in other applications."
                    skills={["API micoservices", "Microservice management", "ASP.NET", "C#", "Containerization", "International partnerships", "React", "JavaScript", "Full stack development"]}
                    liveLink="https://eeventify.robinvanhoof.tech"
                    gitLink="https://github.com/Eeventify"
                >
                    
                </ProjectCard>
            </div>  
        </div>
    )
}

export default Projects;