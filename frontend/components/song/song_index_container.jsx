import { connect } from "react-redux";
import SongIndex from "./song_index";
import { fetchSongs } from "../../actions/songs_actions"

const mSTP = state => ({
    songs: Object.values(state.entities.songs)
})

const mDTP = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs())
})

export default connect(mSTP, mDTP)(SongIndex)