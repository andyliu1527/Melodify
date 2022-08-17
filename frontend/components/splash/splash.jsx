import React from "react";
import { Link } from "react-router-dom";


const Splash = () => {
    return (
        <div id ="splash-container">
            <div id="navbar">
                <a href="#/"><img src={window.logoURL} id="logo"/></a>
                <ul id="nav-links-list">
                    <li><a href="https://github.com/andyliu1527" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/andy-liu-9b2a65159/" target="_blank">LinkedIn</a></li>
                    <li>|</li>
                    <li><a href="#/signup">Sign Up</a></li>
                    <li><a href="#/login">Login</a></li>
                </ul>
            </div>
            <div id="splash">
                <img src={window.splashURL} id="splash-bg" />
                <h1 className="slogan">Music is</h1>
                <h1 className="slogan">is everything</h1>
            </div>
        </div>
    )
}

export default Splash;