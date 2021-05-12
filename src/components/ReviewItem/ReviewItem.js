import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = (props) => {
    const {img, name, price, quantity, key} = props.product;
    const removeProduct = props.removeProduct;
    return (
        <div className="eachProduct">
            <img src={img} alt=""/>
            <div className="productContent">
                <h2> <Link to={"/product/"+key}>{name}</Link></h2>
                <p>Quantity: {quantity}</p>
                <h3>$ {price}</h3>
                <button onClick={()=>removeProduct(key)}> Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;