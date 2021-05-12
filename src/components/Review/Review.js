import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImg from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const placeOrder = ()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    };
    const removeProduct = (data)=> {
        const afterRemoveProduct = cart.filter(pd=> pd.key !== data);
        setCart(afterRemoveProduct);
        removeFromDatabaseCart(data);
    };
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key=>{
            const product = fakeData.find(pd => pd.key===key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProduct);
    }, []);


    return (
        <div className="shopContainer">
            <div className="productContainer">
                {
                    cart.map(pd =>
                        <ReviewItem key={pd.key} removeProduct={removeProduct}  product={pd}></ReviewItem>
                    )
                }
                {
                    orderPlaced && <img src={happyImg} alt=""/>
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}>
                    <button  onClick={placeOrder} className="btn">Place Order</button>                   
                </Cart>
            </div>
        </div>
    );
};

export default Review;