import React from 'react';
import useProducts from '../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    return (
        
        <div>
            <h2>Welcome to order section!</h2>
            <p>Total Products :- { products.length}</p>
        </div>
    );
};

export default Orders;