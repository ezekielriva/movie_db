class ActorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name

  has_many :movies
end
