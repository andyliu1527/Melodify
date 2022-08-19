# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all;

user_1 = User.create(username: "Andy", email:"cloudy@gmail.com", password: "123456");
user_2 = User.create(username: "Andrea", email: "padgzmn@gmail.com", password: "123456");
demoUser = User.create(username: "demoUser", email: "demoUser@gmail.com", password: "demo123");