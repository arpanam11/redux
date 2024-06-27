import { buy_product } from "./ProductType";

const initialState = {
    NumberOfBooks: 20
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_product: 
            return {
                ...state, 
                NumberOfBooks: state.NumberOfBooks - 1
            }
        default: 
            return state;
    }
}

export default ProductReducer;
