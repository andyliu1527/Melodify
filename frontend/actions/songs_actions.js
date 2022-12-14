import * as songsAPI from "../utils/songs_api_util"

export const RECEIVE_SONGS = "RECEIVE_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"

const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
})

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
})

export const fetchSongs = () => dispatch => {
    return songsAPI.fetchSongs()
        .then( songs => dispatch(receiveSongs(songs)))
}

export const fetchSong = songId => dispatch => {
    return songsAPI.fetchSong(songId)
        .then( song => dispatch(receiveSong(song)))
}