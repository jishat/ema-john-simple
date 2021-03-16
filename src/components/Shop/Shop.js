import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (data) => {
        const newCart = [...cart, data];
        setCart(newCart);
    };
    return (
        <div className="shopContainer">
            <div className="productContainer">
                {
                    products.map(pd => 
                        <Product product={pd} handleAddProduct={handleAddProduct}></Product>
                    )
                }
            </div>
            <div className="cartContainer">
                <h3>Order Summery</h3>
                <p>total order: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;