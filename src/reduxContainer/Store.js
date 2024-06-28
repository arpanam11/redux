import { createStore, applyMiddleware } from 'redux';
import ProductReducer from './ProductReducer';
import { apiMiddleware } from './Productmiddleware';

const store = createStore(ProductReducer, applyMiddleware(apiMiddleware));

export default store;