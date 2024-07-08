import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productsSlice';

const AppComponent = () => {
    const dispatch = useDispatch();
    const productss = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

   
    return (
        <div className="App">
            <h1>Products</h1>
            {productss.map((product) => (
            <div key={product.id} >
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <img src={product.image} alt={product.title} width="100" />
            </div>
        ))}
        </div>
    );
};

export default AppComponent;
