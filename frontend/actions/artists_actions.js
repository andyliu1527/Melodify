import * as artistsAPI from "../utils/artists_api_util"

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS"
export const RECEIVE_ARTIST = "RECEIVE_ARTIST"

const receiveArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
});

const receiveArtist = payload => ({
    type: RECEIVE_ARTIST,
    payload
});

export const fetchArtists = () => dispatch => {
    return artistsAPI.fetchArtists()
        .then(artists => dispatch(receiveArtists(artists)))
};

export const fetchArtist = artistId => dispatch => {
    return artistsAPI.fetchArtist(artistId)
        .then(artist => dispatch(receiveArtist(artist)))
};