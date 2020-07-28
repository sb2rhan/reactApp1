import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//importing state(data)
import { addPost, updateTmpPostText } from './redux/state';

export let rerenderEntireRoot = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App profileState={ state.profilePageState } dialogsState={ state.dialogsPageState }
           addPost={ addPost } updateTmpPostText={ updateTmpPostText }/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}