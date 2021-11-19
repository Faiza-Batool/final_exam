class Api::V1::BidsController <  Api::ApplicationController
    before_action :find_auction
    before_action :authenticate_user!

    def create
        bid = Bid.new(bid_params)
        bid.auction = @auction
        bid.user = current_user
       
        if auction.save
            render json:{id: auction.bid.id}
        else
            render json:{errors:auction.bid.errors, status:422}
        end
    end 

    private

    def find_auction
        @auction = Auction.find params[:auction_id]
    end

    def bid_params
        params.require(:bid).permit(:price)
    end

end
