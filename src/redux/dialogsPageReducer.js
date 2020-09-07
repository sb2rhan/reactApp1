const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TMPMESSAGE_TEXT = 'UPDATE-TMPMESSAGE-TEXT';

const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.tmpNewMessageText
            };
            state.messages.push(newMessage);
            state.tmpNewMessageText = '';
            break;
        case UPDATE_TMPMESSAGE_TEXT:
            state.tmpNewMessageText = action.inputValue;
            break;
        default:
            console.log("Incorrect action type");
    }

    return state;
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateTmpMessageTextActionCreator = (text) =>
    ({ type: UPDATE_TMPMESSAGE_TEXT, inputValue: text });


export default dialogsPageReducer;