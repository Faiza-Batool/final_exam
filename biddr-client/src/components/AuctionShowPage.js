import React, {Component} from 'react';
import AuctionDetails from "./AuctionDetails"
import BidList from './BidList';
import {Auction} from "../requests"
import BidCreate from "./BidCreateForm"

class AuctionShowPage extends Component{
    constructor(props){
        super(props);
      
        this.state = {stateAuction: {}}
        // this.BidCreate = this.BidCreate.bind(this);
        
    }

    componentDidMount(){
        Auction.show(this.props.match.params.id)
        .then((fetchAPIAuction)=>{
            this.setState((state)=>{
                return{
                    stateAuction: fetchAPIAuction
                }
            })
        })
    }
    
    componentDidUpdate(){
        console.log('the state has been updated with the fetched data')
    }

    // BidCreate(params){
    //     console.log(`Params: ${params.price}`)
    //     Auction.Bid.create(params).
    //     then((bid) => {
    //         console.log(`auction: ${bid.errors}`)
    //     this.setState((state,props)=>{

        //     return{

        //         bids: [
        //             ...state.bids,
        //             // {
        //             //     id: (Math.max(...state.auctions.map(b => b.id)) +1), 
        //             //     ...params
        //             // }

        //         ]
        //     }
        // })
    // }

    render(){ 
        console.log(this.state.stateAuction)
        const { title, body, current_price, end_date, reserve_price } = this.state.stateAuction;
        return (
            <>
                           
                <div style = {{marginLeft: '2em'}}>
                    <AuctionDetails 
                        title = {title} 
                        body = {body}
                        current_price = {current_price}
                        end_date = {end_date}
                        reserve_price = {reserve_price}  
                    />
                    {/* <BidCreate /> */}
                    <BidList list={this.state.stateAuction.bids} />

                </div>
            </>
        )
    }
}

export default AuctionShowPage;