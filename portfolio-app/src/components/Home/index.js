import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import ReactSkillbar from 'react-skillbars';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import SkillCard from './skillCard.js';

import Portrait from '../../assets/images/portrait.jpeg'
import './home.scss';

const Home = () => {

    const getAge = () => {
        var today = new Date();
        var birthDate = new Date('2001-04-20');

        var age = today.getFullYear() - birthDate.getFullYear();
        var month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() - birthDate.getDate()))
        {
            age--;
        }

        return age;
    }

    var barColor = {title: {text: "#EBEBEB", background: "#4A454A"}, bar: "#48D4CAf0"};

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className="hello-container">                
                <section className='flex-container'>
                    <div className="flex-item">
                        <div className="text-area">
                            <div className="welcome-text">
                                Hi there! <span className="wave">👋</span>
                            </div>
                            <div className="name-text">
                                I am <span className="name">Robin van Hoof</span>
                            </div>
                            <div className="typewriter-text">
                                I'm a
                                <TypeWriterEffect
                                    startDelay={0}
                                    cursorColor="#4A454A"
                                    multiText={[
                                        'Software engineer',
                                        'Full stack web developer',          
                                        'Game designer',
                                    ]}
                                    multiTextDelay={1000}
                                    multiTextLoop={true}
                                    typeSpeed={30}                            
                                />
                            </div>
                            
                        </div>
                        <div className="button-area">
                            <a className="button-link" href="#about-me">
                                <span class="text">About Me</span>
                                <span class="icon"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></span>
                            </a>                                
                            <a className="social-link" href="https://www.linkedin.com/in/robin-van-hoof-238b9a1b0/" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a className="social-link" href="https://github.com/RobinvHoof" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>

                    <div className="flex-item">
                        <div className="portrait-area">
                            <div className="wrapper">
                                <img src={Portrait} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="about-container">
                <h1 id="about-me"/>               
                <div className="flex-container">
                    <div className="flex-item text-block text-card">
                        <h1 className="title">Programming with passion while exploring the world.</h1>
                        <div className="body">
                            <div className="quote">
                                I am passionate about everything that has to do with <span className="highlight">IT</span>, <span className="highlight">Software</span>, <span className="highlight">Tech</span>, and all in between.
                            </div>
                            <p> 
                                Ever since a young age I have always had a great passion for everything IT, Software and Tech related.
                                This started out as an interest in computers and electronics but grew into a hobby of taking apart and reassembling everything I could get my hand on.                                
                            </p>
                            <p>
                                Once I got to the age of 12 I furthered my hobby of technology and started exploring the many fields of IT, first starting with projects like building PCs, but also taking my first steps into software development!
                            </p>
                            <p>
                                From this point onwards I started exploring everything IT, Tech and Software related. To this day I still discover and educate myself about new IT subjects on a daily basis, and do so with love for the field!
                            </p>
                        </div>
                    </div>
                    <div className="flex-item info-table text-card">
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Robin van Hoof</th>
                            </tr>
                            <tr>
                                <th>City</th>
                                <th>Erp (Region Eindhoven)</th>
                            </tr>
                            <tr>
                                <th>Date of birth</th>
                                <th>April 20, 2001</th>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <th>{ getAge() }</th>
                            </tr>
                            <tr>
                                <th>Nationality</th>
                                <th>Dutch</th>
                            </tr>                            
                            <tr>
                                <th>Languages</th>
                                <th>English, Dutch, German</th>
                            </tr>                                                        
                            <tr>
                                <th>Hobbies & interests</th>
                                <th>Programming, Gaming, Streaming, Vinyl Records, Cooking</th>
                            </tr>
                        </table>                        
                    </div>                    
                </div>
            </div>

            <div className="proficiencies-container">
                <div className="proficiencies text-card">
                    <h1 className="title">Proficiencies</h1>
                    <div className="body">                        
                        <ReactSkillbar animationDuration={1000} barBackground="#221E22aa" animationDelay={500} skills=
                            {[
                                {type: "C#", level: 95, color: barColor},
                                {type: "JavaScript", level: 80, color: barColor},
                                {type: "React", level: 75, color: barColor},
                                {type: "HTML/CSS", level: 70, color: barColor},
                                {type: "C++", level: 60, color: barColor},                                                                                                        
                            ]} 
                        /><br/>
                        <p>
                            Over the years I have research, learnt and tinkered with many technologies, programming languages and frameworks. Using these I spent much time building academic, personal and industrial products up from scratch with great interest and joy. In doing so I mastered the fundamentals of many of these.
                        </p>
                        <p>
                            My main skill-focus lies in <span className="highlight">Fullstack C# and JavaScript</span> development including both backend development using for example <span className="highlight">.NET</span> and frontend development using <span className="highlight">ASP.NET</span> but also JavaScript/TypeScript frameworks like <span className="highlight">React, Vue</span> and other similar ones. 
                            Furthermore I am well versed in <span className="highlight">Git</span> usage, both in terms of source control and in terms of Git Automation.
                        </p>

                        <div className="skill-container">
                            <div className="flex-container">
                                <SkillCard skill="Software Engineering" learnedAt={["Academic Experience at Fontys University of Applied Science", "Database Maintainer at TopRC"]} certifications={["HBO Bachelor HBO-ICT in Software Engineering"]}/>
                                <SkillCard skill="Embedded Engineering" learnedAt={["Academic Experience at Fontys University of Applied Science"]} certifications={["HBO Bachelor HBO-ICT in Embedded Engineering"]}/>
                                <SkillCard skill="3D CAD Design" learnedAt={["Junior Engineer at Team Rembrandts"]} certifications={["Solidworks Associate Degree"]}/>
                                <SkillCard skill="Database Management"  learnedAt={["Database Maintainer at TopRC"]}/>
                            </div>
                        </div>
                    </div>

                    <h2 className="title">Soft Skills</h2>
                    <div className="body">
                        <p>
                            Besides hardskills I have also gained a large amount of softskills through academic goals and work experience in different fields. 
                        </p>
                        <div className="skill-container">
                            <div className="flex-container">                                                                      
                                <SkillCard skill="Leadership" learnedAt={["Teamlead Operations at Albert Heijn", "Secretary at s.v. Salve Mundi"]} />
                                <SkillCard skill="Time management" learnedAt={["Multitude of academic multidisciplinary and international projects", "Teamlead Operations at Albert Heijn"]} />
                                <SkillCard skill="Crisis Management"  certifications={["Emergency Response Officer Certificate"]}/>
                                <SkillCard skill="Communication" learnedAt={["Teamlead Operations at Albert Heijn", "Secretary at s.v. Salve Mundi", "Lead Commissioner at s.v. Salve Mundi", "Multidisciplinary project Developer during academic industry projects"]} />
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
            
            {/*
            <div className="experience-container">
                <div className="work-experience text-card">
                    
                </div>
            </div>
            */}  
        </div>
    )
}


export default Home;