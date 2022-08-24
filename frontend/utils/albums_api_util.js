export const fetchAlbums = () => (
    $.ajax({
        url: 'api/albums',
        method: 'GET'
    })
)

export const fetchAlbum = albumId => (
    $.ajax({
        url: `api/albums/${albumId}`,
        method: 'GET'
    })
)