import React from "react";

const Home = props => {
    return (
        <div id ="home-container">
            <h1>Good Evening, {props.currentUser.username}</h1>
        </div>
    )
}

export default Home;