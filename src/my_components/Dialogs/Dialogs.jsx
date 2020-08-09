import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { addMessageActionCreator, updateTmpMessageTextActionCreator } from './../../redux/state.js';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsState.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsState.messages
        .map(m => <Message message={m.message}/>);

    let newMessageText = React.createRef();

    let onChangeText = () => {
      let text = newMessageText.current.value;
      props.dispatch(updateTmpMessageTextActionCreator(text));
    }
    let onAddMessage = () => {
      props.dispatch(addMessageActionCreator());
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className="newMessage">
                    <textarea ref={ newMessageText } onChange={ onChangeText } value={props.dialogsState.tmpNewMessageText}/>
                    <button onClick={ onAddMessage }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
