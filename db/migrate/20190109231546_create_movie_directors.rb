class CreateMovieDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :movie_directors do |t|
      t.integer :person_id
      t.integer :movie_id

      t.timestamps
    end
  end
end
