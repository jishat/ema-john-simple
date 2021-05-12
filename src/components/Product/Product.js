import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img, name, seller, price, stock, key} = props.product;
    const handleAddProduct = props.handleAddProduct;
    const quantity = props.quantity;

    return (
        <div className="eachProduct">
            <img src={img} alt=""/>
            <div className="productContent">
                <h2> <Link to={"/product/"+key}>{name}</Link></h2>
                <p>By: {seller}</p>
                <h3>$ {price}</h3>
                <p>only {stock} left in stock - order soon </p>
                <button id={key} onClick={event=>handleAddProduct(props.product, event)}><FontAwesomeIcon icon={faShoppingCart} /> Add to card</button>
                <button className="btn setQuantity" disabled>{quantity}</button>
                
            </div>
        </div>
    );
};

export default Product;