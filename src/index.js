import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './storeContext';


let rerenderEntireRoot = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            {/* providing global context to all child components */}
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireRoot(store);

// after each alter in state.js, it will rerender the whole root of components
store.subscribe(() => {
    rerenderEntireRoot(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
