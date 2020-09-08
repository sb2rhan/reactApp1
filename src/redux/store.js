import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

let store = {
    _state: {
        profilePageState: {
            posts: [
                { id: 1, message: "Hi, how are you guys?", likesCount: 23 },
                { id: 2, message: "The guy who wrote this is my brother", likesCount: 10 },
                { id: 3, message: "Hello, World!", likesCount: 3 },
                { id: 4, message: "Welcome to your first post.", likesCount: 12 }
            ],
            tmpNewPostText: ''
        },
        dialogsPageState: {
            dialogs: [
                { id: 1, name: "Saka" },
                { id: 2, name: "Olzhas" },
                { id: 3, name: "Zhambyl" },
                { id: 4, name: "Beka" },
                { id: 5, name: "Nura" }
            ],
            messages: [
                { id: 1, message: "Hello! How are you?" },
                { id: 2, message: "Nice to meet you!" },
                { id: 3, message: "How your work was today?" }
            ],
            tmpNewMessageText: ''
        }
    },
    _callObserver() {
    }, // will hold observer function from index.js

    getState() {
        return this._state;
    },
    subscribe(observerFromIndex) {
        this._callObserver = observerFromIndex; // observer pattern similar to publisher-subscriber
    },

    dispatch(action) { // accepts an action that has been send from component
        // action is object { type: 'NAMEOFFUNCTION' }
        this._state.profilePageState = profilePageReducer(this._state.profilePageState, action);
        this._state.dialogsPageState = dialogsPageReducer(this._state.dialogsPageState, action);

        this._callObserver(this);
    }
};


export default store;
