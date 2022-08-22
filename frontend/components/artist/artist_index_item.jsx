import React, {useState} from 'react'
import { Link } from 'react-router-dom'


const ArtistIndexItem = props => {

    const {id, name, bio} = props.artist
    return (
        <div className="artist-index-item-container">
            <div className="artist-index-item-img">IMAGE</div>
            <Link to={`/artists/${id}`}>{name}</Link>
        </div>
    );
}

export default ArtistIndexItem;