import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './Item.css';

const Item = (props) => {
    const { name, img, seller, price, stock } = props.inventory;

    return (
        <div>
            <div className='item'>
                <img src={img} alt=""></img>
                <p className='item-name' >{name}</p>
                <p>Price: {price}</p>
                <p>Seller: {seller}</p>
                <p>Description:</p>
            </div>
            <button onClick={() => props.handleBt(props.inventory)} className='update-bt'>
                <p>Updated</p>
            </button>
        </div>
    );
};

export default Item;