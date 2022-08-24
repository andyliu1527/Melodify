import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from "../actions/albums_actions";
import { RECEIVE_ARTIST } from "../actions/artists_actions";

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALBUMS:
            return action.albums
        case RECEIVE_ALBUM:
            return Object.assign({}, state, { [action.album.id]: action.album })
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.artist.albums )
        default:
            return state;
    }
}

export default albumsReducer;