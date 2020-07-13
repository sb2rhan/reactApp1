import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postMessages = [
  { id: "1", message: "Hi, how are you guys?", likesCount: "23" },
  { id: "2", message: "The guy who wrote this is my brother", likesCount: "10" },
  { id: "3", message: "Hello, World!", likesCount: "3" },
  { id: "4", message: "Welcome to your first post.", likesCount: "12" }
];
let dialogs = [
    {id: "1", name: "Saka"},
    {id: "2", name: "Olzhas"},
    {id: "3", name: "Zhambyl"},
    {id: "4", name: "Beka"},
    {id: "5", name: "Nura"}
];
let messages = [
    {id: "1", message: "Hello! How are you?"},
    {id: "2", message: "Nice to meet you!"},
    {id: "3", message: "How your work was today?"}
];

ReactDOM.render(
  <React.StrictMode>
    <App profilePosts={postMessages} dialogs={dialogs} dialogMessages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
