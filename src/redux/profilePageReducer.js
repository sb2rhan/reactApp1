const ADD_POST = 'ADD-POST';
const UPDATE_TMPPOST_TEXT = 'UPDATE-TMPPOST-TEXT';

const profilePageReducer = (state, action) => {
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
