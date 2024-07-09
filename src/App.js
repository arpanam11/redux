import React from 'react';
import { Provider } from 'react-redux';
import store from './reduxToolkit/store';
//import store from './reduxContainer/Store'
import AppComponent from '../src/reduxToolkit/AppComponent';
import ProductContainer from './reduxContainer/ProductContainer';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppComponent />
               {/* <ProductContainer/> */}
            </div>
        </Provider>
    );
}

export default App;
