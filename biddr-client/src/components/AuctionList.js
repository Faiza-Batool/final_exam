import React from 'react'
import AuctionDetails from './AuctionDetails'

export default function QuestionList(props) {
    console.log(props.list);
    return (
        <>
             <ul>
                {
                    props.list.map((e,i)=>{
                        return <AuctionDetails
                        key = {i}
                        title ={e.title}
                        body = {e.body}
                        current_price = {e.current_price}
                        end_date = {e.end_date}
                        reserve_price ={e.reserve_price}
                        created_at = {e.created_at}

                        />
                    })
                }
            </ul>

        </>
    )
}
