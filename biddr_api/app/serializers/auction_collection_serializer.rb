class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :body,
  )
end
