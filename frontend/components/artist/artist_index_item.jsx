import React, {useState} from 'react'
import { withRouter, useHistory } from 'react-router-dom'


const ArtistIndexItem = props => {

    const {id, name, bio, profile_picture_URL} = props.artist
    
    let history = useHistory();

    const handleClick = () => {
        return history.push(`/artists/${id}`);
    }

    console.log(profile_picture_URL)

    return (
        <div className="artist-index-item-container" onClick={handleClick}>
            <div className="artist-index-item-img">
                <img src={profile_picture_URL} />
            </div>
            <h1>{name}</h1>
        </div>
    );
}

export default withRouter(ArtistIndexItem);