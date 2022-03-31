import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    

    // product is passing as parameter
    const handleAddToCart = (product) => {
        console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Selecter Items: { cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;