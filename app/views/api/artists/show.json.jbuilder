json.artist do 
    json.partial! 'artist', artist: @artist
    json.banner_URL url_for(@artist.banner_picture) if @artist.banner_picture.attached?
    json.bio_URL url_for(@artist.bio_picture) if @artist.bio_picture.attached?
end

json.albums do
    @artist.albums.each do |album|
        json.set! album.id do
            json.partial! 'api/albums/album', album: album
            json.album_cover_URL url_for(album.album_cover) if album.album_cover.attached?
        end
    end
end

# entities : {
#     artists: {
#         1: {
#             id :1
#              albums: {}
#         }
#     }
#     albums: {}
# }
