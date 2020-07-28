import * as serviceWorker from './serviceWorker';
//importing state(data)
import state from './redux/state';
import { rerenderEntireRoot } from './render';

rerenderEntireRoot(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();