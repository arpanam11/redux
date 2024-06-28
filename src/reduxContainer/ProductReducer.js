import { buy_product } from "./ProductType";
import { fetch_product_request } from "./ProductType";

const initialState = {
    NumberOfBooks: 20,
    products:[]
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_product: 
            return {
                ...state, 
                NumberOfBooks: state.NumberOfBooks - 1
            }
        case 'fetch_product_success': 
            return {
                ...state, 
                products:action.payload,
            }
        default: 
            return state;
    }
}

export default ProductReducer;
