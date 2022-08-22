import { connect } from "react-redux";
import { fetchArtist } from "../../actions/artists_actions";
import ArtistIndexItem from "./artist_index_item";  

const mSTP = ( { entities: { artists } }, ownProps) => {
    debugger;
return {
    artist: artists[ownProps.match.params.id],
    artistId: ownProps.match.params.id
}
}

const mDTP = dispatch => ({
    fetchArtist: artistId => dispatch(fetchArtist(artistId))
})

export default connect(mSTP, mDTP)(ArtistIndexItem)