import React, {Component} from "react";
import {Auction} from "../requests"
import {Link} from 'react-router-dom'

class AuctionIndexPage extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            auctions: []
        }
        this.createAuction = this.createAuction.bind(this)
    }

    componentDidMount(){
        Auction.index()
        .then((auctionsData)=> {
            this.setState((state) => {
                return{
                    auctions: auctionsData
                }
            })
        })
    }

    createAuction(params){
        this.setState((state,props)=>{
            return{
                auctions: [
                    ...state.auctions,
                    {
                        id: (Math.max(...state.auctions.map(a => a.id)) +1), 
                        ...params
                    }

                ]
            }
        })
    }

    render() {
        return (
            <>
            <h1 style = {{marginTop: '0em',backgroundColor: "antiquewhite",textAlign: 'center'}} >Auctions</h1>           
            <div>
                {this.state.auctions.map((e)=>{
                    console.log(e)
                        return (
                        <>
                          <h4 style = {{marginLeft: "1em"}} className="font-link"><Link to={`/auctions/${e.id}`}> {e.title}</Link></h4> 

                        </> 
                    
                        )
                })}
            </div>
            </>
        )
    }
}
export default AuctionIndexPage;