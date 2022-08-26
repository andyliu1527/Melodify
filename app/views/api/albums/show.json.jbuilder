json.album do
    json.partial! 'album', album: @album
    json.album_cover_URL url_for(@album.album_cover) if @album.album_cover.attached?
end

json.artist @album.artist

json.songs do
    @album.songs.each do |song|
        json.set! song.id do
            json.partial! 'api/songs/song', song: song
        end
    end
end