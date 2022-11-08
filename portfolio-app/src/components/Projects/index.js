import React from "react";
import ProjectCard from "./projectCard";


import Banner from '../../assets/images/banner.png'

// Portfolio site
import Portfolio_Logo from '../../assets/images/logo.png'

// D&D Mapper
import DnDMapper_Logo from '../../assets/images/DnDMapper_Logo.png'
import DnDMapper_Demo1 from '../../assets/images/DnDMapper_Demo1.gif'

// Ordio
import Ordio_Logo from '../../assets/images/Ordio_Logo.png'
import Ordio_Demo1 from '../../assets/images/Ordio_Demo1.gif'
import Ordio_Development_Page from '../../assets/images/Ordio_Development_Page.png'

// Eeventify
import Eeventify_Logo from '../../assets/images/Eeventify_Logo.png'

// Rogue Anomaly
import RA_Logo from '../../assets/images/RA_Logo.png'
import RA_Demo1 from '../../assets/images/RA_Demo1.mp4'
import RA_Bossroom from '../../assets/images/RA_Bossroom.png'
import RA_Weapons from '../../assets/images/RA_Weapons.png'
import RA_Spells from '../../assets/images/RA_Spells.png'

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

                <ProjectCard bannerImg={DnDMapper_Logo} name="D&D Mapper"
                    description="D&D Mapper is an application I individually developed for an academic project. The application is a tool for the woldwide known game Dungeons and Dragons. D&D Mapper is a web based platform developed in the ASP.NET framework that allows gamemasters to convey their world and story to the player in a customizalbe and higly interactive digital environment."
                    skills={["ASP.NET", "C#", "Database management", "SQL", "Unit Testing", "HTML", "CSS", "SOLID", "Full stack web development"]}
                    date="August 2021 - Januari 2022"
                    liveLink=""
                    gitLink="https://github.com/RobinvHoof/DnD-Mapper"
                    images={[{media: DnDMapper_Demo1, text: "Demo"}]}
                    links={[{url: "https://github.com/RobinvHoof/DnD-Mapper/tree/main/Documentation", text: "In-depth technical documentation"}]}
                >
                    <div>
                        <p>
                            D&D Mapper is an application I individually developed for an academic project. The application is a tool for the woldwide known game Dungeons and Dragons. D&D Mapper is a web based platform developed in the ASP.NET framework that allows gamemasters to convey their world and story to the player in a customizalbe and higly interactive digital environment.
                        </p><br />

                        <p>
                            D&D Mapper is the first full stack web development project I made. The project combines an ASP.NET frontend with a C# backend and MSSQL database to create one coherent application that gives users a secure environment. The application uses techniques like hashing to securely safe user passwords in self-hosted databases.
                        </p>
                    </div>
                </ProjectCard>
                
                <ProjectCard bannerImg={Ordio_Logo} name="Ordio Platform"
                    description="Ordio is a platform that I individually developed for an academic project. The platform is service that restaurant owners can use to upload their menu's, which can then be accessed through APIs by third party applications to utilize in many different ways, for example ordering systems."
                    skills={["API micoservices", "ASP.NET", "C#", "EF", "Containerization", "React", "JavaScript", "HTML", "CSS", "Full stack web development"]}
                    date="March 2022 - June 2022"                    
                    liveLink="https://ordio.robinvanhoof.tech"
                    gitLink="https://github.com/FHICT-Ordio"
                    images={[{media: Ordio_Demo1, text: "Demo"}, {media: Ordio_Development_Page, text: "API Documentation for use of the Ordio platform"}]}
                    links={[{url: "https://github.com/FHICT-Ordio/general/blob/main/Portfolio/IP/Products%20and%20learning%20outcomes.md", text: "In-depth technical documentation"}, {url: "https://frontend.ordio.robinvanhoof.tech/", text: "Simple outsourced menu display implementation using Ordio APIs"}]}
                >
                    <div>
                        <p>
                            Ordio is an innovative universal platform that allows restaurant owners to take their menus to the digital space. Ordio provides a digital environment that restaurant owner can put their menus on. These menus can then be shared with third party applications using API's using secured tokens. These third party platforms can use the data in whatever way they want to do whatever they want with it. Think of online ordering systems, digital tableside ordering and so on.
                        </p><br />
                        
                        <p>
                            Ordio does not natively offer any of these before-mentioned applications: it is a platform that provides other applications with data needed to make such implementations possible. It does so through secured API endpoints which can be integrated using the online API Wiki provided on the Admin webpage. 
                        </p><br />

                        <p>
                            The platform integrates Auth0 identification to provide restaurant owners with a safe and secure environment that cannot be accessed without the proper credentials.
                        </p>
                    </div>
                </ProjectCard>

                <ProjectCard bannerImg={Eeventify_Logo} name="Eeventify Platform"
                    description="Eeventify is a group project me and a group of international developers created for an academic project. The platform is a social app that users can use to create, find and join social events with others in their environment. The platform also offers API endpoints for use of data in other applications."
                    skills={["API micoservices", "Microservice management", "ASP.NET", "C#", "Containerization", "International partnerships", "React", "JavaScript", "Full stack development"]}
                    date="Febuari 2022 - June 2022"
                    coauthors={[
                        {name: "Jeffrey Derksen", link: "https://github.com/jeffrey-fontys", role: "Developer"}, 
                        {name: "Rens Vlooswijk", link: "https://github.com/RensVlooswijk", role: "Developer"},
                        {name: "Rik Jansen", link: "https://github.com/RikJansenTU", role: "Developer"},
                        {name: "Timo Maas", link: "https://github.com/timojw", role: "Developer"},
                        {name: "Tjerk Zeilstra", link: "https://github.com/TjerkZ", role: "Developer"}
                    ]}
                    liveLink="https://eeventify.robinvanhoof.tech"
                    gitLink="https://github.com/Eeventify"
                    images={[]}
                >

                </ProjectCard>

                <ProjectCard bannerImg={RA_Logo} name="Rogue Anomaly"
                    description="Rogue Anomaly is my first project in Game Development. The game is the result of a gamejam-like project, and is entirely designed and developed by a six-man group. The game is develped in the Unity game engine. Rogue Anomaly is a fast paced rogue-like dungeon crawler set in a futuristic space theme. The player uses an array of weapons, spells and abilities to make their way through a spaceship and defeat the final boss to take back control of their mothership."
                    skills={["Game Development", "Game Design", "Unity", "C#", "High-pace development"]}
                    date="September 2022"
                    coauthors={[
                        {name: "Nathan Thus", link: "https://github.com/NathanThus", role: "Developer"}, 
                        {name: "Jochem Last", link: "https://github.com/JLastig", role: "Developer"},
                        {name: "Jeffrey Derksen", link: "https://github.com/jeffrey-fontys", role: "Developer"},
                        {name: "Mitchell Balfour van Burleigh", link: "https://github.com/mitchell2001b", role: "Developer"},
                        {name: "Tony Jiang", link: "https://github.com/TonyJ3", role: "Developer"},
                        {name: "Julian Janssen", link: "https://github.com/JulianJ99", role: "Developer"}                        
                    ]}
                    liveLink="https://fontys-gdt.itch.io/rogue-anomaly"
                    gitLink="https://github.com/RobinvHoof/Rogue-Anomaly"
                    images={[{media: RA_Demo1, text: "Demo"},{media: RA_Weapons, text: "Numerous weapons offer different playstyles"},{media: RA_Spells, text: "Different spells to bring variety to a run"},{media: RA_Bossroom, text: "Final boss for added challenge"}]}
                >
                    <div>
                        <p>
                            Rogue Anomaly is my first project in Game Development. The game is the result of a gamejam-like project where we designed and developed a game in a three-day timespan. The game is developed in the Unity game engine using C#.
                        </p><br />

                        <p>
                            Rogue Anomaly is a fast paced rogue-like dungeon crawler. The player's objective is to make their way through a spaceship killing enemies and clearing rooms one by one to ultimately reach the bridge and defeat the final boss to reclaim their mothership. The player can use a multitude of different weapons and spells to play the game in a playstyle that suits them.
                        </p><br />
                        <p>
                            To add variety and difficulty to the game there is a catch: Overtime a multitude of different modifiers are applied to the player or enemies that effect the game in many different ways making the game more challenging with every modifier activated. As a result, the game becomes progressively harder the longer the player takes to clear it. This also means no two runs will ever be the same! 
                        </p>
                    </div>
                </ProjectCard>

                <ProjectCard bannerImg={BSAM_Banner} name="Black Sails at Midnight"
                    description="Black Sails at Midnight is my second project in Game Development. The entire game is designed and developed in a two man group. The game is develped in the Unity game engine. Black Sails at Midnight is an innovative Tower Defence and First Person Shooter hybrid set in the golden age of piracy."
                    skills={["Game Development", "Game Design", "Unity", "C#"]}
                    date="September 2022 - November 2022"
                    coauthors={[
                        {name: "Nathan Thus", link: "https://github.com/NathanThus", role: "Developer"}
                    ]}
                    gitLink="https://github.com/Black-Sails-at-Midnight/Black-Sails-at-Midnight"
                    images={[{media: BSAM_Banner, text: "Test"}, {media: Banner, text: "Text2"}]}
                >
                  
                </ProjectCard>
            </div>  
        </div>
    )
}

export default Projects;