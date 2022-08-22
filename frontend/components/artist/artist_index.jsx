import React, {useState, useEffect} from "react"
import Artist from "./artist_index_item";

const ArtistIndex = props => {

    const {artists, fetchArtists} = props

    useEffect( () => {
        fetchArtists();
    }, []);

    return (
        <div id="artist-index-container">
            {
                artists.map((artist, i) => <Artist artist={artist} key={`${i}`}/> )
            }
        </div>
    );
}

export default ArtistIndex;