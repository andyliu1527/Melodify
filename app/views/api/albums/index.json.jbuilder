@albums.each do |album|
    json.set! album.id do
        json.partial! 'album', album: album
        json.album_cover_URL url_for(album.bio_picture) if album.album_cover.attached?
    end
end