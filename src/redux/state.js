const ADD_POST = 'ADD-POST';
const UPDATE_TMPPOST_TEXT = 'UPDATE-TMPPOST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TMPMESSAGE_TEXT = 'UPDATE-TMPMESSAGE-TEXT';

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
        {id: "1", name: "Saka"},
        {id: "2", name: "Olzhas"},
        {id: "3", name: "Zhambyl"},
        {id: "4", name: "Beka"},
        {id: "5", name: "Nura"}
      ],
      messages: [
        {id: "1", message: "Hello! How are you?"},
        {id: "2", message: "Nice to meet you!"},
        {id: "3", message: "How your work was today?"}
      ],
      tmpNewMessageText: ''
    }
  },
  _callObserver() {
  }, // will hold observer function from index.js
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePageState.tmpNewPostText,
      likesCount: 0
    };
    this._state.profilePageState.posts.push(newPost);
    this._state.profilePageState.tmpNewPostText = '';
    this._callObserver(this);
  },
  _updateTmpPostText(inputValue) {
    this._state.profilePageState.tmpNewPostText = inputValue;
    this._callObserver(this);
  },
  _addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPageState.tmpNewMessageText
    };
    this._state.dialogsPageState.messages.push(newMessage);
    this._state.dialogsPageState.tmpNewMessageText = '';
    this._callObserver(this);
  },
  _updateTmpMessageText(inputValue) {
    this._state.dialogsPageState.tmpNewMessageText = inputValue;
    this._callObserver(this);
  },

  getState() {
    return this._state;
  },
  subscribeToIndexFunction(observerFromIndex) {
    this._callObserver = observerFromIndex; // observer pattern similar to publisher-subscriber
  },

  dispatch(action) { // accepts an action that has been send from component
    // action is object { type: 'NAMEOFFUNCTION' }
    switch (action.type) {
      case 'ADD-POST':
        this._addPost();
        break;
      case 'UPDATE-TMPPOST-TEXT':
        this._updateTmpPostText(action.inputValue);
        break;
      case 'ADD-MESSAGE':
        this._addMessage();
        break;
      case 'UPDATE-TMPMESSAGE-TEXT':
        this._updateTmpMessageText(action.inputValue);
        break;
      default:
        console.log("Incorrect action type");
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateTmpTextActionCreator = (text) =>
  ({ type: UPDATE_TMPPOST_TEXT, inputValue: text });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateTmpMessageTextActionCreator = (text) =>
  ({type: UPDATE_TMPMESSAGE_TEXT, inputValue: text});

export default store;
