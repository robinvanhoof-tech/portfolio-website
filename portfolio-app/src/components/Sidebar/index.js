import React from "react";
import { Link, NavLink } from 'react-router-dom'

import './sidebar.scss'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={Logo}/>
            </Link>
            
            <nav>
                <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4A454A"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4A454A"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4A454A"/>
                </NavLink>
            </nav>

            <div className="socials">
                <a href="https://www.linkedin.com/in/robin-van-hoof-238b9a1b0/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} color="#4A454A"/>
                </a>
                <a href="https://github.com/RobinvHoof" target="_blank">
                    <FontAwesomeIcon icon={faGithub} color="#4A454A"/>
                </a>
                <a href="https://twitter.com/ARandomSosig" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} color="#4A454A"/>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;