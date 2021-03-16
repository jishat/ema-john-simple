import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    const handleAddProduct = props.handleAddProduct;

    return (
        <div className="eachProduct">
            <img src={img} alt=""/>
            <div className="productContent">
                <h2>{name}</h2>
                <p>By: {seller}</p>
                <h3>$ {price}</h3>
                <p>only {stock} left in stock - order soon </p>
                <button onClick={()=>handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to card</button>
            </div>
        </div>
    );
};

export default Product;