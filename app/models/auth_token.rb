class AuthToken < ApplicationRecord
  validates :iat, :exp, :token, presence: true

  def self.authenticate!(token)
    auth = find_by(token: token)
    auth && Time.now <= auth.exp
  end
end
