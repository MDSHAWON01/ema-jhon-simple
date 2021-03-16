import React from 'react';

const ReviewItem = (props) => {
    //console.log(props);
    const {name,quantity,key,price}=props.product;
    const reviewStyle={
        borderBottom:'1px solid light gray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200PX'
    }
    return (
        <div style={reviewStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity:{quantity}</p>
            <p>${price}</p>
            <br/>
            <button className="main-button"
            onClick={()=>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;