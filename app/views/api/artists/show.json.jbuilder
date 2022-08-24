json.partial! 'artist', artist: @artist
json.banner_picture_URL url_for(@artist.banner_picture) if @artist.banner_picture.attached?
json.bio_picture_URL url_for(@artist.bio_picture) if @artist.bio_picture.attached?
json.albums do
    @artist.albums.each do |album|
        json.set! album.id do
            json.partial! 'api/albums/album', album: album
        end
    end
end