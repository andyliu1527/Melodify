@albums.each do |album|
    json.set! album.id do
        json.partial! 'album', album: album
        json.album_cover_URL url_for(album.album_cover) if album.album_cover.attached?
    end
end