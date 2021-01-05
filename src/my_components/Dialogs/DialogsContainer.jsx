import React from 'react';
import StoreContext from '../../storeContext';
// for creating action object
import { addMessageActionCreator, updateTmpMessageTextActionCreator } from './../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    return (
        // using the store from common context
        <StoreContext.Consumer>
        {
            (store) => {
                debugger;
                let state = store.getState().dialogsPageState;

                let changeMessageText = (text) => {
                    store.dispatch(updateTmpMessageTextActionCreator(text));
                }

                let sendMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                return (<Dialogs changeMessageText={changeMessageText}
                    sendMessage={sendMessage} dialogsState={state} />)
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;
