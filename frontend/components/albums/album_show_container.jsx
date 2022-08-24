import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { fetchAlbum } from "../../actions/albums_actions"


const mSTP = ({ entities: { albums } }, ownProps) => ({
    selectedAlbum: albums[ownProps.match.params.id],
    albumId: parseInt(ownProps.match.params.id),

})

const mDTP = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
})

export default connect(mSTP, mDTP)(AlbumShow)


// 1. Change album reducer like artist reducer to get artist info
// 2. Change the JSON.jbuilders
// 4. finish this