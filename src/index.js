import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireRoot = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            {/*bind means to save 'this' as pointer to store object, not to callback object */}
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireRoot(store);

// after each alter in state.js, it will rerender the whole root of components
store.subscribeToIndexFunction(rerenderEntireRoot);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
