import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd)=> total+prd.price*prd.quantity, 0);
    return (
        <>
            <h3>Order Summery</h3>
            <p>total order: {cart.length}</p>
            <p>total Price: ${totalPrice}</p>
            {
                props.children
            }
        </>
    );
};

export default Cart;