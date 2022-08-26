import React from "react";

const SongIndexItem = props => {


    const { title, track_num, duration } = props.song


    return (
        <div className="song-index-item">
            <div>
                {track_num}
            </div>
            <div>
                {title}
            </div>
            <div>
                {duration}
            </div>
        </div>
    );
}

export default SongIndexItem;