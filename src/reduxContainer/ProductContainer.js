import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchproduct, purchase_product } from './ProductAction';

const ProductContainer = () => {
    const numberOfBooks = useSelector(state => state.NumberOfBooks);
    const products = useSelector(state => state.products);
    console.log('products' , products)
    console.log('numberOfBooks' , numberOfBooks)


    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchproduct())
    }, [dispatch])

    const handleBuy = () => {
        dispatch(purchase_product());
    }

    return (
        <div>
            <div>Product Container</div>
            <h2>No of Books - {numberOfBooks} </h2>
            <button onClick={handleBuy}>Buy Book</button>


            <div className='cardbox'>
                {products.map(product => (
                    <div key={product.id} className='cards'>
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <p><b>Rate: </b>{product.rating.rate} , <b>Count: </b>{product.rating.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductContainer;
