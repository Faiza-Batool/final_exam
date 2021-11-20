class Auction < ApplicationRecord
    belongs_to :user
    has_many :bids, dependent: :destroy

    validates :title, presence: {message: "must be provided"}
    validates :body, presence: true

end
