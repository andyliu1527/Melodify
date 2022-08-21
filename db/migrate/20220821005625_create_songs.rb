class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|

      t.string :title, null: false
      t.integer :track_num, null: false
      t.integer :duration, null: false
      t.integer :album_id, null: false

      t.timestamps
    end
  end
end
