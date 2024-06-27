import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import purchase_product from './ProductAction';

const ProductContainer = () => {
    const numberOfBooks = useSelector(state => state.NumberOfBooks);
    const dispatch = useDispatch();

    const handleBuy = () => {
        dispatch(purchase_product());
    }

    return (
        <div>
            <div>Product Container</div>
            <h2>No of Books - {numberOfBooks} </h2>
            <button onClick={handleBuy}>Buy Book</button>
        </div>
    );
}

export default ProductContainer;
