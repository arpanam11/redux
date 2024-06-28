import { buy_product } from "./ProductType";
import {fetch_product_request} from './ProductType'

export const purchase_product = () => {
    return {
        type: buy_product
    }
}
export const fetchproduct = () => {
    return {
        type: fetch_product_request
    }
}

