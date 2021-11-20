import React from 'react'

export default function NewAuctionForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const params = {
            title: formData.get("title"),
            body: formData.get("body"),
            end_date: formData.get("end_date"),
            reserve_price: formData.get("current_price"),
        }
        console.log(params);
        props.createAuction(params);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1 style = {{marginTop: '0em',backgroundColor: "antiquewhite",textAlign: 'center'}}>
            Create an Auction
            </h1>

            <div>
                <label style = {{marginLeft: "1em"}}htmlFor="title">Title</label>
                <input style = {{marginLeft: "1em"}} type="text" name="title" id="title" />
            </div>
            <br/>
            <div>
                <label style = {{marginLeft: "1em"}}htmlFor="body">Body</label>
                <input style = {{marginLeft: "1em"}} type="text" name="body" id="body" />
            </div>
            <br/>
            <div>
                <label style = {{marginLeft: "1em"}}htmlFor="end_date">End Date</label>
                <input style = {{marginLeft: "1em"}} type="date" name="end_date" id="end_date" />
            </div>
            <br />
            <div>
                <label style = {{marginLeft: "1em"}}htmlFor="current_price">Reserve Price</label>
                <input style = {{marginLeft: "1em"}} type="integer" name="current_price" id="current_price" />
            </div>
            <br />
            <div>
                <input style = {{marginLeft: "1em",background: "dimgray", fontFamily: "fantasy", alignItems: 'center',justifyContent: 'center',color: "white", borderColor: "darkgray", fontWeight: "bold" }} type="submit" value="Submit" />
            </div>


        </form>
    )
}
