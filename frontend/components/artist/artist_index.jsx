import React, {useState, useEffect} from "react"
import ArtistIndexItem from "./artist_index_item";

const ArtistIndex = props => {

    const {artists, fetchArtists} = props

    useEffect( () => {
        fetchArtists();
    }, []);

    return (
        <div id="artist-index-container">
            {
                artists.map((artist, i) => <ArtistIndexItem artist={artist} key={`${i}`}/> )
            }
        </div>
    );
}

export default ArtistIndex;