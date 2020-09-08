const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TMPMESSAGE_TEXT = 'UPDATE-TMPMESSAGE-TEXT';

// default state to render
let initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {
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