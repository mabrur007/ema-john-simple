import React from 'react';
import './Product.css';

const Product = (props) => {
    const { handleAddToCart } = props;
    const { img, name, price, seller, ratings } = props.product || {};

    return (
        <div className='product'>
            <img src={img} alt="product-img" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: {price}</p>
                <p><small>Manufacture: { seller}</small></p>
                <p><small>Ratings: { ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;