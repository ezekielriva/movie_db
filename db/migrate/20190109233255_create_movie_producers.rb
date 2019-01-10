class CreateMovieProducers < ActiveRecord::Migration[5.2]
  def change
    create_table :movie_producers do |t|
      t.integer :movie_id
      t.integer :person_id

      t.timestamps
    end
  end
end
