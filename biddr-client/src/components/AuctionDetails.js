import React from 'react'

export default function AuctionDetails(props) {
   
    return (
        <>
       
            <h2>{props.title}</h2>
            <p >
                {props.body} 
                <br/><br/>
            Current Price: ${props.current_price} 
                <br/>
             Ends at: {props.end_date}
             <br/>
             
             reserve_price: {props.reserve_price}
             </p>
             
            
        </>
    )
}
