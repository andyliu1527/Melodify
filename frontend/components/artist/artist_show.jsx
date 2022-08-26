import React, { useState, useEffect } from "react";
import AlbumIndexContainer from "../albums/album_index_container";

const ArtistShow = props => {

    const [artist, setArtist] = useState({
        name: "",
        bio: "",
        banner_URL: "",
        bio_URL: ""
    })

    const {artistId, selectedArtist, fetchArtist} = props;

    useEffect( () => {
        if (!selectedArtist) {
        fetchArtist(artistId)
            .then( response =>  setArtist(response.payload.artist) )
        } else {
        setArtist(selectedArtist);
        }
    }, []);

    const { banner_URL, bio_URL } = artist;

    return (
        <div className="artist-show-container">
            <div className= "artist-show-header">
                <div id="artist-banner-container">
                    <img id="artist-banner-img"src={banner_URL} alt="" />
                </div>
                <div id="artist-header">
                    <h1>{artist.name}</h1>
                </div>
            </div>
                <AlbumIndexContainer />
            <div className="artist-bio-container">
                <div className="artist-bio">
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