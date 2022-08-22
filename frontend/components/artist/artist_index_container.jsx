import { connect } from "react-redux";
import { fetchArtists } from "../../actions/artists_actions";
import ArtistIndex from "./artist_index";

const mSTP = state => ({
    artists: Object.values(state.entities.artists)
})

const mDTP = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
})

export default connect(mSTP, mDTP)(ArtistIndex)