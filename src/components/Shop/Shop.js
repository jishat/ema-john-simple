import React, {useEffect, useState, useContext } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css';
import {CategoriesContext} from '../../App';

const Shop = () => {
    const [category] = useContext(CategoriesContext);
    let first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        if(category.toLowerCase() === 'all'){
            setProducts(first10);
        }else{
            const getProductByCategory = fakeData.filter(pd=>pd.category.toLowerCase() === category.toLowerCase());
            first10 = getProductByCategory.slice(0,10);
            setProducts(first10);
        }
        
    }, [category]);

    const handleAddProduct = (data, e) => {
        const thisElement = e.currentTarget;
        
        const toBeAddedKey = data.key;
        const sameProduct = cart.find(pd=>pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd=>pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }else{
            data.quantity = 1;
            newCart = [...cart, data];
        }
        thisElement.nextSibling.innerText=count;
        setCart(newCart);
        addToDatabaseCart(toBeAddedKey, count);
    };
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key=>{
            const product = fakeData.find(pd => pd.key===key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProduct);
    }, []);
    // console.log(cart);
    return (
        <div className="shopContainer">
            {category}
            <div className="productContainer">
                {
                    products.map(pd => {
                        const pdKey = pd.key;
                        const getQuantity = cart.find(crt=>crt.key === pdKey);
                        const qty = getQuantity ? getQuantity.quantity : 0;
                        return <Product key={pd.key} quantity={qty} product={pd} handleAddProduct={handleAddProduct}></Product>
                    })
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}>
                    <Link to="/review" className="btn">Review</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;