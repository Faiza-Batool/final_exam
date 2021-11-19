class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :body,
    :current_price,
    :end_date,
    :created_at,
    :updated_at,
  )


belongs_to :user
  class UserSerializer < ActiveModel::Serializer
    attributes(
      :id,:first_name,:last_name,:email
    )
  end

  has_many :bids
  class BidSerializer < ActiveModel::Serializer
    attributes(
      :id,:price,:created_at,:updated_at
    )
  end

end
