import React from "react"

const Navbar = props => {

    return (
        <div id="main-navbar">
            <div className="nav-buttons">
                <button><i className="fa-solid fa-chevron-left"></i></button>
                <button><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div className="user-dropdown">
                <h1><i className="fa-solid fa-circle-user"></i>{props.currentUser.username}</h1>
            <button onClick={props.logout}>logout</button>
            </div>
        </div>
    )

}

export default Navbar;