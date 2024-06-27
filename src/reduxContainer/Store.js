import {createStore} from 'redux';
import ProductReducer from './ProductReducer';

const Store = createStore(ProductReducer)



export default Store;