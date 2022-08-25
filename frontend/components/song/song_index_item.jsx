import React from "react";

const SongIndexItem = props => {

    const { song } = props.song

    return (
        <div className="song-index-item">
            <div>
                {song.track_num}
            </div>
            <div>
                {song.title}
            </div>
            <div>
                {song.duration}
            </div>
        </div>
    );
}

export default SongIndexItem;