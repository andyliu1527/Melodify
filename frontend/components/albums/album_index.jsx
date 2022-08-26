import React, { useState, useEffect }from "react";
import AlbumIndexItem from "./album_index_item";

const AlbumIndex =  props => {

    const { albums, fetchArtist, fetchAlbums, artistId} = props

    useEffect( () => {
        if (Object.keys(albums).length === 0) {
            fetchArtist(artistId)
        }
    }, []);

    return (
        <div id="album-index-container">
            {
                Object.values(albums).map((album, i) => <AlbumIndexItem album={album} key={`${i}`}/> )
            }
        </div>
    )
};

export default AlbumIndex;

