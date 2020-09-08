import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import { createStore, combineReducers } from "redux";


let reducers = combineReducers({
    profilePageState: profilePageReducer,
    dialogsPageState: dialogsPageReducer
});

let store = createStore(reducers);


export default store;