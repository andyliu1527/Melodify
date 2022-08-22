import React from "react";
import ArtistIndexContainer from "../artist/artist_index_container";

const Home = props => {
    return (
        <div id ="home-container">
            <h1>Good Evening, {props.currentUser.username}</h1>
        </div>
    )
}

export default Home;