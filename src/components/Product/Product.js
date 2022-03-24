import React from 'react';
import './Product.css';

const Product = (props) => {
    //console.log(props.product);
    const {name,img, price } = props.product || {};
    return (
        <div className='product'>
            <img src={img} alt="product-img" />
            <h2>Name: {name}</h2>
            <p>price: { price}</p>
            
        </div>
    );
};

export default Product;