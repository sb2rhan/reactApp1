import React from 'react';
// for creating action object
import { addMessageActionCreator, updateTmpMessageTextActionCreator } from './../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let changeMessageText = (text) => {
        props.dispatch(updateTmpMessageTextActionCreator(text));
    }

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    return ( <Dialogs changeMessageText={ changeMessageText } sendMessage={ sendMessage } dialogsState={ props.dialogsState }/> );
}

export default DialogsContainer;
