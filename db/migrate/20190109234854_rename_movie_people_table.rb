class RenameMoviePeopleTable < ActiveRecord::Migration[5.2]
  def change
    rename_table(:movie_people, :movie_actors)
  end
end
