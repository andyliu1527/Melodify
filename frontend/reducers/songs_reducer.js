import { RECEIVE_SONGS, RECEIVE_SONG } from "../actions/songs_actions";
import { RECEIVE_ALBUM } from "../actions/albums_actions";

const songsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SONGS:
            return action.songs
        case RECEIVE_SONG:
            return Object.assign({}, state, { [action.song.id]: action.song })
        case RECEIVE_ALBUM:
            return Object.assign({}, state, action.payload.songs )
        default:
            return state;
    }
}

export default songsReducer;