import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

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

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages
        .map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
