class CreateAuthTokens < ActiveRecord::Migration[5.2]
  def change
    create_table :auth_tokens do |t|
      t.string :token
      t.ate_time :iat
      t.datetime :exp
    end
  end
end
