@artists.each do |artist|
    json.set! artist.id do
        json.partial! 'artist', artist: artist
    end
end

# artists: { 
#     1: 
#     { id: 1, artist: "keshi", bio: null}
#     2:
#     { id: 2, artist: "aweubgfiw", bio: null}

# }