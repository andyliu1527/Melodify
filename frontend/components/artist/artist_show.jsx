import React, { useEffect } from "react";

const ArtistShow = props => {
    debugger;

    useEffect( () => {
        fetchArtist(props.artistId);
    }, []);

    return (
        <div id="artist-show-container">
            <h1>{props.artist.name}</h1>
        </div>
    );
}

export default ArtistShow;