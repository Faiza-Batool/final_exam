import React from 'react'

const BidDetails = (props) => {
    const {price, bidder, created_at} = props;
    console.log(props)
    return (
        <div>
            <p>
            ${price} 
            <br/>

            on  
            {created_at}
            <br/>
            </p>
              
        </div>
    )
}
export default BidDetails;