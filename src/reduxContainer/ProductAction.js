import { buy_product } from "./ProductType"
// purchase_book is action name 
const purchase_product = () => {
    return {
        type : buy_product
    }
}

export default purchase_product