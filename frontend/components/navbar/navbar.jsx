import React from "react";
// import Logo from "/app/assets/images/Logo.png"

const Navbar = () => {

    return (
        <div id="navbar">
            <a id="logo" href="#/">MELODIFY</a>
            <ul id="nav-links-list">
                <li><a href="https://github.com/andyliu1527" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/andy-liu-9b2a65159/" target="_blank">LinkedIn</a></li>
                <li>|</li>
                <li><a href="#/signup">Sign Up</a></li>
                <li><a href="#/login">Login</a></li>
            </ul>
        </div>
    )
}

export default Navbar;