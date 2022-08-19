import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Main from "../main/main"


const Splash = props => {
    const splashContent = () => {

        const demoLogin = (e) => {
            e.preventDefault();
            props.login({
                username: "demoUser",
                password: "demo123"
            }).then( () => props.history.push('/'));
        }

        return (
            <div id ="splash-container">
                <div id="splash-navbar">
                    <a href="#/"><img src={window.logoURL} id="nav-logo"/></a>
                    <ul id="nav-links-list">
                        <li><a href="https://github.com/andyliu1527" target="_blank">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/andy-liu-9b2a65159/" target="_blank">LinkedIn</a></li>
                        <li>|</li>
                        <li><a href="#/signup">Sign Up</a></li>
                        <li><a href="#/login">Login</a></li>
                    </ul>
                </div>
                <div id="splash">
                    {/* <img src={window.splashURL} id="splash-bg" /> */}
                    <h1 className="slogan">Music is</h1>
                    <h1 className="slogan">everything</h1>
                    <button id="demo-login" onClick={demoLogin}>LOGIN AS DEMO USER</button>
                </div>

                <div id="splash-footer-container">
                    <div id="footer-logo-container" className="splash-footer">
                        <img src={window.logoURL} id="footer-logo"/>
                    </div>
                    <div id="footer-tech-container" className="splash-footer">
                        <h1 id="tech-h1">Technologies Used</h1>
                        <ul id="tech-list">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Rails</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                    <div id="footer-last-container" className="splash-footer">
                        <h1>Made by Andy Liu</h1>
                    </div>
                </div>
            </div>
        )
    }

    const mainContent = () => (
        <Main history={history} location={location} />
    )

    return props.currentUser ? mainContent() : splashContent();

}

export default withRouter(Splash);