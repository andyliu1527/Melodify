# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  genre      :string           not null
#  single     :boolean          not null
#  duration   :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord

    validates :title, :year, :genre, :duration, :artist_id, presence: true
    validates :single, inclusion: { in: [true, false] }

    belongs_to :artist, 
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :songs,
        foreign_key: :album_id,
        class_name: :Song

end
