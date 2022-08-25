import React, { useState, useEffect } from "react";
import SongIndex from "../song/song_index";

const AlbumShow = props => {

    const [album, setAlbum] = useState({
        title: "",
        year: "",
        genre: "",
        single: "",
        duration: "",
        artist_id: "",
        // artist: { name: ""},
        // album_cover_URL: ""
    })

    const { albumId, selectedAlbum, fetchAlbum } = props;

    useEffect( () => {
        if (!selectedAlbum) {
        fetchAlbum(albumId)
            .then( response =>  setAlbum(response.album) )
        } else {
        setAlbum(selectedAlbum);
        }
    }, []);

    const { artist, album_cover_URL } = album;

    return (
        <div className="album-show-container">
            <div className="album-header-container">
                <div className="album-header">
                    <div id="album-cover-container">
                        <img id="album_cover" src={album_cover_URL} alt="" />
                    </div>
                    <div id="album-artist-info">
                        <h1>{album.title}</h1>
                        {/* <h1>{artist.name}</h1> */}
                    </div>
                </div>
            </div>
            <div id="song-show">
                {/* <SongIndex album={album}/> */}
            </div>
        </div>
    );
}

export default AlbumShow;