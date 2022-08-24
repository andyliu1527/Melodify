import { connect } from "react-redux"
import { fetchArtist } from "../../actions/artists_actions"
import ArtistShow from "./artist_show"


const mSTP = ( { entities: { artists } }, ownProps) => ({
    selectedArtist: artists[ownProps.match.params.id],
    artistId: parseInt(ownProps.match.params.id)
})

const mDTP = dispatch => ({
    fetchArtist: artistId => dispatch(fetchArtist(artistId))
})

export default connect(mSTP, mDTP)(ArtistShow)