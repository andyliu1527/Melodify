import React, { useState, useEffect } from "react";

const AlbumShow = props => {

    const [album, setAlbum] = useState({
        title: "",
        year: "",
        genre: "",
        single: "",
        duration: "",
        artist_id: ""
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

    const { album_cover_URL } = album;

    return (
        <div className="album-show-container">
            <div className="album-header-container">
                <div className="album-header">
                    <div id="album-cover-container">
                        <img src={album_cover_URL} alt="" />
                    </div>
                    <div id="album-artist-info">
                        <h1>{album.title}</h1>
                        {/* <h1>{artist.name}</h1> */}
                    </div>
                </div>
            </div>
            <div id="song-show">

            </div>
        </div>
    );
}

export default AlbumShow;