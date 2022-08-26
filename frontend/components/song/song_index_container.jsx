import { connect } from "react-redux";
import SongIndex from "./song_index";
import { fetchSongs } from "../../actions/songs_actions"
import { fetchAlbum } from "../../actions/albums_actions"
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    const albumId = parseInt(ownProps.match.params.id)

    // return {
    //     songs: Object.values(state.entities.songs),
    //     albumId: albumId
    // }

    const selectSongs = (albumId, songs) => {
        return Object.keys(songs).filter((key) => songs[key].album_id === albumId)
        .reduce((cur, key) => { return Object.assign(cur, { [key]: songs[key] })}, {});
    }

    return { songs: selectSongs(albumId, state.entities.songs), albumId}
}
const mDTP = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
})

export default withRouter(connect(mSTP, mDTP)(SongIndex))