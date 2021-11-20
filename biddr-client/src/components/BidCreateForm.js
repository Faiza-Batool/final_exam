import React from 'react'

export default function BidCreateForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const params = {
            price: formData.get("price"),
        }
        console.log(params);
        props.createBid(params);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="price"></label>
                <input type="integer" name="reserve_price" id="reserve_price" />
                <input type="submit" value="Bid" className="ui right floated red button"/>
            </div>
        </form>
    )
}
