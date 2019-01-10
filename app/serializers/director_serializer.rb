class DirectorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :alias

  has_many :movies
end
