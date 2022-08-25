export const fetchSongs = () => (
    $.ajax({
        url: '/api/songs',
        method: 'GET'
    })
)

export const fetchSong = songId => (
    $.ajax({
        url: `/api/songs/${songId}`,
        method: 'GET'
    })
)