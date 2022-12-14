import * as albumsAPI from "../utils/albums_api_util"

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receiveAlbum = payload => ({
    type: RECEIVE_ALBUM,
    payload
});

export const fetchAlbums = () => dispatch => {
    return albumsAPI.fetchAlbums()
        .then(albums => dispatch(receiveAlbums(albums)))
};

export const fetchAlbum = albumId => dispatch => {
    return albumsAPI.fetchAlbum(albumId)
        .then(album => dispatch(receiveAlbum(album)))
};