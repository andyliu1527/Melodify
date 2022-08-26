import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { fetchAlbum } from "../../actions/albums_actions";


const mSTP = (state, ownProps) => {
    const albums = state.entities.albums;
    const artist = state.entities.artists;

    return {
        selectedAlbum: albums[ownProps.match.params.id],
        albumId: parseInt(ownProps.match.params.id),
        artist: artist,
    }

}

const mDTP = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
})

export default connect(mSTP, mDTP)(AlbumShow)


// 1. Change album reducer like artist reducer to get artist info
// 2. Change the JSON.jbuilders
// 4. finish this