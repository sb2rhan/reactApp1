const ADD_POST = 'ADD-POST';
const UPDATE_TMPPOST_TEXT = 'UPDATE-TMPPOST-TEXT';

// default state to render
let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you guys?", likesCount: 23 },
        { id: 2, message: "The guy who wrote this is my brother", likesCount: 10 },
        { id: 3, message: "Hello, World!", likesCount: 3 },
        { id: 4, message: "Welcome to your first post.", likesCount: 12 }
    ],
    tmpNewPostText: ''
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.tmpNewPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.tmpNewPostText = '';
            break;
        case UPDATE_TMPPOST_TEXT:
            state.tmpNewPostText = action.inputValue;
            break;
        default:
            console.log("Incorrect action type");
    }

    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateTmpTextActionCreator = (text) =>
    ({ type: UPDATE_TMPPOST_TEXT, inputValue: text });


export default profilePageReducer;
