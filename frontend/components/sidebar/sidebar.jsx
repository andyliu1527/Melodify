import React from "react";

const Sidebar = props => {

    return (
        <div id="sidebar-container">
            <div className="sidebar-logo-container">
                <a href="#/"><img src={window.logoURL} id="nav-logo"/></a>
            </div>
            <div className="sidebar-nav">
                <a href="#/"><i className="fa-solid fa-house fa-1x"></i>Home</a>
                <a href="#/"><i className="fa-solid fa-magnifying-glass"></i>Search</a>
                <a href="#/"><i className="fa-solid fa-book"></i>Your Library</a>
            </div>
            <div className="sidebar-library">
                <a href="#/"><i className="fa-solid fa-square-plus"></i>Create Playlist</a>
                <a href="#/"><i className="fa-brands fa-gratipay"></i>Liked Songs</a>
            </div>
            <div className="separator"></div>
            <div className="sidebar-playlists">
                <a href="#/">Playlist #1</a>
                <a href="#/">Playlist #2</a>
            </div>
        </div>
    );
}

export default Sidebar;