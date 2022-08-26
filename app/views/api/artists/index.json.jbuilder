@artists.each do |artist|
    json.set! artist.id do
        json.partial! 'artist', artist: artist
        json.profile_URL url_for(artist.profile_picture) if artist.profile_picture.attached?
        json.banner_URL url_for(artist.banner_picture) if artist.banner_picture.attached?
        json.bio_URL url_for(artist.bio_picture) if artist.bio_picture.attached?
    end
end