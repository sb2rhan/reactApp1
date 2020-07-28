import { rerenderEntireRoot } from "../render";

let state = {
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
    ]
  }
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePageState.tmpNewPostText,
    likesCount: 0
  };
  state.profilePageState.posts.push(newPost);
  state.profilePageState.tmpNewPostText = '';
  rerenderEntireRoot(state);
}

export let updateTmpPostText = (inputValue) => {
  state.profilePageState.tmpNewPostText = inputValue;
  rerenderEntireRoot(state);
}

export default state;