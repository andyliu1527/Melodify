@artists.each do |artist|
    json.set! artist.id do
        json.partial! 'artist', artist: artist
        json.banner_picture_URL url_for(artist.banner_picture) if artist.banner_picture.attached?
        json.profile_picture_URL url_for(artist.profile_picture) if artist.profile_picture.attached?
    end
end

# artists: { 
#     1: 
#     { id: 1, artist: "keshi", bio: null}
#     2:
#     { id: 2, artist: "aweubgfiw", bio: null}

# }