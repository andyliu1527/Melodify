import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAlbums } from "../../actions/albums_actions"
import { fetchArtist } from "../../actions/artists_actions"
import AlbumIndex from "./album_index";

const mSTP = (state, ownProps) => {
    const artistId = parseInt(ownProps.match.params.id)

    const selectAlbums = (artistId, albums) => {
        return Object.keys(albums).filter((key) => albums[key].artist_id === artistId)
        .reduce((cur, key) => { return Object.assign(cur, { [key]: albums[key] })}, {});
    }

    return { albums : selectAlbums( artistId, state.entities.albums), artistId}

    // return {
    //     albums : Object.values(state.entities.albums)
    // }
}
    

const mDTP = dispatch => ({
    fetchArtist : artistId => dispatch(fetchArtist(artistId))
})

export default withRouter(connect(mSTP, mDTP)(AlbumIndex))