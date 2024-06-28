export const apiMiddleware = store => next => action => {
    if (action.type === 'fetch_product_request') {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => store.dispatch({ type: 'fetch_product_success', payload: data }));
    }
    next(action);
};