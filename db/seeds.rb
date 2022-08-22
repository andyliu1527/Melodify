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

keshi = Artist.create!(name: "Keshi")
slchld = Artist.create!(name: "slchld")

keshi_always = Album.create!(title: "always", year: 2020, genre: "Pop", single: false, duration: 1170, artist_id: keshi.id)
song1 = Song.create!(title: "always", track_num: "1", duration: 172, album_id: keshi.id)
song2 = Song.create!(title: "more", track_num: "2", duration: 184, album_id: keshi.id)
song3 = Song.create!(title: "drunk", track_num: "3", duration: 227, album_id: keshi.id)
song4 = Song.create!(title: "talk", track_num: "4", duration: 174, album_id: keshi.id)
song5 = Song.create!(title: "B.Y.S", track_num: "5", duration: 165, album_id: keshi.id)
song6 = Song.create!(title: "us", track_num: "6", duration: 248, album_id: keshi.id)