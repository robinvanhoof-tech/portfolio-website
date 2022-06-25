import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Portrait from '../../assets/images/portrait.jpeg'
import './home.scss';

const Home = () => {
    return (
        <div className="home-page">
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
                            <Link to="/about">
                                <a className="button-link">
                                    <span class="text">About Me</span>
                                    <span class="icon"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></span>
                                </a>                                
                            </Link>
                            <a className="social-link" href="https://www.linkedin.com/in/robin-van-hoof-238b9a1b0/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a className="social-link" href="https://github.com/RobinvHoof" target="_blank">
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
        </div>
    )
}

export default Home;






{/* 
                <section className='flex-container'>
                    <div className="flex-item">
                        
                    </div>
                    <div className="flex-item">
                        
                    </div>
                </section>
                */}