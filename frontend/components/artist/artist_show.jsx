import React, { useEffect } from "react";

const ArtistShow = props => {
    console.log("hi");

    // useEffect( () => {
    //     fetchArtist(props.artistId);
    // }, []);

    return (
        <div id="artist-show-container">
            {/* <h1>{props.artist.name}</h1> */}
            <h1>hello world</h1>
        </div>
    );
}

export default ArtistShow;