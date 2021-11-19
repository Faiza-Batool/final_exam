class User < ApplicationRecord
    has_secure_password

    has_many :bids, dependent: :destroy
    has_many :auctions, dependent: :destroy

end
