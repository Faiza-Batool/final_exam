import React, {Component} from "react";
import NewAuctionForm from "./NewAuctionForm";
import {Auction} from '../requests';

class AuctionNewPage extends Component {
    constructor(props){
        super(props);
        this.state = {errors:[]};
        this.createAuction = this.createAuction.bind(this);
    }
    createAuction(params) {
        console.log(`Params: ${params.title} ${params.body} ${params.end_date} ${params.current_price}`)
        Auction.create(params)
          .then((auction) => {
            console.log(`auction: ${auction.errors}`)
            if (auction.errors) {
              console.log(`auctionErrors: ${auction.errors}`)
              this.setState({ errors: auction.errors });
            } else {
              
              this.props.history.push(`/auctions/${auction.id}`);
            }
          })
      }
    
      render(){
        return(
          <div>
            <NewAuctionForm createAuction={this.createAuction} errors={this.state.errors}/>
          </div>
        )
      }
    
    }
    
export default AuctionNewPage;
  