# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  track_num  :integer          not null
#  duration   :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord

    validates :title, :track_num, :duration, :album_id, presence: true;

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album

    has_one :artist, through: :album

    has_one_attached :audio
end
