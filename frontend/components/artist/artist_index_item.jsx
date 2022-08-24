import React, {useState} from 'react'
import { withRouter, useHistory } from 'react-router-dom'


const ArtistIndexItem = props => {

    const {id, name, bio, profile_URL} = props.artist
    
    let history = useHistory();

    const handleClick = () => {
        return history.push(`/artists/${id}`);
    }

    return (
        <div className="artist-index-item-container" onClick={handleClick}>
            <div className="artist-index-item-img">
                <img className="profile-picture"src={profile_URL} />
            </div>
            <div className="artist-tag">
                <h1>{name}</h1>
                <h1>Artist</h1>
            </div>
        </div>
    );
}

export default withRouter(ArtistIndexItem);