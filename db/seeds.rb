# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all;
Artist.delete_all;
Album.delete_all;
Song.delete_all;

user_1 = User.create!(username: "Andy", email:"cloudy@gmail.com", password: "123456");
user_2 = User.create!(username: "Andrea", email: "padgzmn@gmail.com", password: "123456");
demoUser = User.create!(username: "demoUser", email: "demoUser@gmail.com", password: "demo123");

keshi = Artist.create!(name: "Keshi", bio: "xoxosos")
jaypark = Artist.create!(name: "Jay Park" bio: "Jay Park is considered as one of the most influential artists in hip-hop and popular music. He has established AOMG, H1GHR MUSIC and MORE VISION, released a diverse range of music including featuring for other artists and appeared as a mentor in various competitive music programs both domestic and international. Jay Park proved himself to the world when he became first-ever Asian artist to sign with JAY-Z’s label ‘Roc Nation’, and ever since, he has successfully established himself as a globally acclaimed artist.")
slchld = Artist.create!(name: "slchld", bio: ":)")

keshi_always = Album.create!(title: "always", year: 2020, genre: "Pop", single: false, duration: 1170, artist_id: keshi.id)
song1 = Song.create!(title: "always", track_num: "1", duration: 172, album_id: keshi.id)
song2 = Song.create!(title: "more", track_num: "2", duration: 184, album_id: keshi.id)
song3 = Song.create!(title: "drunk", track_num: "3", duration: 227, album_id: keshi.id)
song4 = Song.create!(title: "talk", track_num: "4", duration: 174, album_id: keshi.id)
song5 = Song.create!(title: "B.Y.S", track_num: "5", duration: 165, album_id: keshi.id)
song6 = Song.create!(title: "us", track_num: "6", duration: 248, album_id: keshi.id)

keshi_gabriel = Album.create!(title: "GABRIEL", year: 2022, genre: "Pop", single: false, duration: 1959, artist_id: keshi.id)

keshi_2soon = Album.create!(title:"2 soon", year: 2018, genre: "Pop", single: true, duration: 206, artist_id: keshi.id)

jaypark_yacht = Album.create!(title: "YACHT", year: 2017, genre: "Hip-Hop", single: true, duration: 246, album_id: jaypark.id)

jaypark_summeride = Album.create!(title: "SUMMERIDE", year: 2021, genre: "Hip-Hop", single: true, duration: 218, album_id: jaypark.id)

slchld_youwontbethereforme = Album.create!(title: "you won't be there for me", year: 2021, genre: "Pop", single: false, duration: 182, artist_id: slchld.id)
