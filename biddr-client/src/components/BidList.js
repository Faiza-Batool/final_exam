import React from 'react'
import BidDetails from './BidDetails'

export default function BidList(props) {
    const bids = props.list
    console.log(props.list)
    return (
        <div>
            <h4>Previous Bids:</h4>
            <ul>
                {
                    bids?
                        props.list.map((e,i)=>{
                            return <BidDetails
                            key = {i}
                            price = {e.price}
                            created_at= {e.created_at}
                            />
                        })
                        :null
                }
            </ul>
        </div>
    )
}
