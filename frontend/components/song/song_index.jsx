import React, { useEffect } from "react";
import SongIndexItem from "./song_index_item";


const SongIndex = props => {

    const { albumId, songs, fetchAlbum } = props

    useEffect( () => {
        fetchAlbum(albumId);
    }, []);

    return (
        <div className="song-index-container">
            <div id="song-index-header">
                <h1>Track Number</h1>
                <h1>Track Title</h1>
                <h1>Duration</h1>
            </div>
            <div className="song-index-item-container">
                {
                    Object.values(songs).map((song, i) => <SongIndexItem song={song} key={`${i}`}/> )
                }
            </div>
        </div>
    );
}

export default SongIndex;