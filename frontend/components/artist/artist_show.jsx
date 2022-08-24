import React, { useState, useEffect } from "react";
import AlbumIndexContainer from "../albums/album_index_container";

const ArtistShow = props => {

    const [artist, setArtist] = useState({
        name: "",
        bio: ""
    })

    const {artistId, selectedArtist, fetchArtist} = props;

    useEffect( () => {
        if (!selectedArtist) {
        fetchArtist(artistId)
            .then( response =>  setArtist(response.artist) )
        } else {
        setArtist(selectedArtist);
        }
    }, []);

    const { banner_URL, bio_URL } = artist;

    return (
        <div id="artist-show-container">
            <div id = "artist-show">
                <div id="artist-banner-container">
                    <img id="artist-banner-img" src={banner_URL} alt="" />
                    <div id="artist-header">
                        <h1>{artist.name}</h1>
                    </div>
                </div>
                <AlbumIndexContainer />
                <div id="artist-bio">
                    <img id="bio-picture" src={bio_URL} alt="" />
                    <div id="artist-bio-text">
                        <p>{artist.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistShow;