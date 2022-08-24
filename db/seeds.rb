# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all;
Artist.delete_all;
Album.delete_all;
Song.delete_all;

user_1 = User.create!(username: "Andy", email:"cloudy@gmail.com", password: "123456");
user_2 = User.create!(username: "Andrea", email: "padgzmn@gmail.com", password: "123456");
demoUser = User.create!(username: "demoUser", email: "demoUser@gmail.com", password: "demo123");

keshi = Artist.create!(name: "Keshi")
keshi_profile = URI.open('https://cloudyfy-photos.s3.amazonaws.com/cloudyfyphotos/artists/keshi/keshi_profile.jpeg')
keshi_banner = URI.open('https://cloudyfy-photos.s3.amazonaws.com/cloudyfyphotos/artists/keshi/keshi_banner.jpg')
keshi_bio = URI.open('https://cloudyfy-photos.s3.amazonaws.com/cloudyfyphotos/artists/keshi/keshi_bio.jpeg')

keshi.profile_picture.attach(io: keshi_profile, filename: "keshi_profile.jpeg")
keshi.banner_picture.attach(io: keshi_banner, filename: "keshi_banner.jpg")
keshi.bio_picture.attach(io: keshi_bio, filename: "keshi_bio.jpeg")

jaypark = Artist.create!(name: "Jay Park")
jaypark_profile = URI.open('https://cloudyfy-photos.s3.amazonaws.com/cloudyfyphotos/artists/jaypark/jaypark_profile.jpeg')
jaypark_banner = URI.open('https://cloudyfy-photos.s3.amazonaws.com/cloudyfyphotos/artists/jaypark/jaypark_banner.jpeg')
jaypark_bio = URI.open('https://cloudyfy-photos.s3.amazonaws.com/cloudyfyphotos/artists/jaypark/jaypark_bio.jpeg')

jaypark.profile_picture.attach(io: jaypark_profile, filename: "jaypark_profile.jpeg")
jaypark.banner_picture.attach(io: jaypark_banner, filename: "jaypark_banner.jpeg")
jaypark.bio_picture.attach(io: jaypark_bio, filename: "jaypark_bio.jpeg")

slchld = Artist.create!(name: "slchld")
slchld_profile = URI.open("https://cloudyfy-photos.s3.amazonaws.com/cloudyfyphotos/artists/shchld/slchld_profile.jpeg")
slchld_banner = URI.open('https://cloudyfy-photos.s3.amazonaws.com/cloudyfyphotos/artists/shchld/slchld_banner.jpeg')
slchld_bio = URI.open('https://cloudyfy-photos.s3.amazonaws.com/cloudyfyphotos/artists/shchld/shchld_bio.jpeg')

slchld.profile_picture.attach(io: slchld_profile, filename: "slchld_profile.jpeg")
slchld.banner_picture.attach(io: slchld_banner, filename: "slchld_banner.jpeg")
slchld.bio_picture.attach(io: slchld_bio, filename: "slchld_bio.jpeg")

keshi_always = Album.create!(title: "always", year: 2020, genre: "Pop", single: false, duration: 1170, artist_id: keshi.id)
song1 = Song.create!(title: "always", track_num: "1", duration: 172, album_id: keshi_always.id)
song2 = Song.create!(title: "more", track_num: "2", duration: 184, album_id: keshi_always.id)
song3 = Song.create!(title: "drunk", track_num: "3", duration: 227, album_id: keshi_always.id)
song4 = Song.create!(title: "talk", track_num: "4", duration: 174, album_id: keshi_always.id)
song5 = Song.create!(title: "B.Y.S", track_num: "5", duration: 165, album_id: keshi_always.id)
song6 = Song.create!(title: "us", track_num: "6", duration: 248, album_id: keshi_always.id)

keshi_gabriel = Album.create!(title: "GABRIEL", year: 2022, genre: "Pop", single: false, duration: 1959, artist_id: keshi.id)

keshi_2soon = Album.create!(title:"2 soon", year: 2018, genre: "Pop", single: true, duration: 206, artist_id: keshi.id)

jaypark_yacht = Album.create!(title: "YACHT", year: 2017, genre: "Hip-Hop", single: true, duration: 246, artist_id: jaypark.id)

jaypark_summeride = Album.create!(title: "SUMMERIDE", year: 2021, genre: "Hip-Hop", single: true, duration: 218, artist_id: jaypark.id)

slchld_youwontbethereforme = Album.create!(title: "you won't be there for me", year: 2021, genre: "Pop", single: false, duration: 182, artist_id: slchld.id)
