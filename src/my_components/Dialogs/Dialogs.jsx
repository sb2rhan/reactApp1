import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsState.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsState.messages
        .map(m => <Message message={m.message} id={m.id} />);

    //let newMessageText = React.createRef();

    let onChangeMessageText = (e) => {
        //let text = newMessageText.current.value;
        // this is more proper way than using references
        let text = e.target.value;
        props.changeMessageText(text);
        
    }
    let onSendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className="newMessage">
                    <div>
                        <textarea onChange={onChangeMessageText} value={props.dialogsState.tmpNewMessageText} />
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;
