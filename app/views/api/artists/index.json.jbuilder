@artists.each do |artist|
    json.set! artist.id do
        # debugger; 
        json.partial! 'artist', artist: artist
        json.profile_URL url_for(artist.profile_picture) if artist.profile_picture.attached?
    end
end