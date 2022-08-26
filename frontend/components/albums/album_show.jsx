import React, { useState, useEffect } from "react";
import SongIndexContainer from "../song/song_index_container";

const AlbumShow = props => {

    const [album, setAlbum] = useState({
        title: "",
        year: "",
        genre: "",
        single: "",
        duration: "",
        artist_id: "",
        // artist: "",
        // album_cover_URL: ""
    })

    const { artist, albumId, selectedAlbum, fetchAlbum } = props;

    useEffect( () => {
        if (!selectedAlbum) {
        fetchAlbum(albumId)
            .then( response =>  setAlbum(response.payload.album) )
        } else {
        setAlbum(selectedAlbum);
        }
    }, []);

    const { album_cover_URL } = album;


    return (
        <div className="album-show-container">
            <div className="album-header-container">
                <div className="album-header">
                    <div id="album-cover-container">
                        <img id="album_cover" src={album_cover_URL} alt="" />
                    </div>
                    <div id="album-artist-info">
                        <h1>{album.title}</h1>
                        <h1>{artist.name}</h1>
                    </div>
                </div>
            </div>
            <div id="song-show">
                <SongIndexContainer />
            </div>
        </div>
    );
}

export default AlbumShow;