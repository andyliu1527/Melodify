import React from "react";
import { withRouter, useHistory } from 'react-router-dom'


const AlbumIndexItem = props => {

    const {id, title, year, genre, single, duration, artist_id } = props.album

    let history = useHistory();

    const handleClick = () => {
        return history.push(`/albums/${id}`);
    }

    return (
        <div className="album-index-item-container" onClick={handleClick}>
            <div className="album-index-item-img">
                <img className="album-cover" src="" alt="" />
            </div>
            <div id="album-tag">
                <h1>{title}</h1>
                <h1>
                    {single === true  ? "Single" : "Album"}
                </h1>
            </div>
        </div>
    );
}

export default withRouter(AlbumIndexItem);