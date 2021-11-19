class Api::V1::AuctionsController < Api::ApplicationController
   
    before_action :authenticate_user!, except: [:index, :show]

    def index
        auctions = Auction.order(created_at: :desc)
        render(json: auctions, each_serializer: AuctionCollectionSerializer)
    end

    def show
        @auction = Auction.find(params[:id])
        if @auction
            # return a single question in json format
            render(json: @auction)
        else
            render(json: { error: "Auction Not Found"})
        end
    end

    def create
       
        auction = Auction.new(auction_params)
        auction.user = current_user
       
        if auction.save
            render json:{id: auction.id}
        else
            render json:{errors:auction.errors, status:422}
        end
       
    end

    private

    def auction_params
        params.require(:auction).permit(:title,:body,:current_price,:end_date)
    end

end
