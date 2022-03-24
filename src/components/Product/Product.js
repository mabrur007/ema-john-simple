import React from 'react';
import './Product.css';

const Product = (props) => {
    //console.log(props.product);
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
            <button className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;