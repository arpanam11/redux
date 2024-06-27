import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import ProductContainer from './reduxContainer/ProductContainer';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <ProductContainer/>
            </div>
        </Provider>
    );
}

export default App;
