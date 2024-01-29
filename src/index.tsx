import './index.css';
import {state, subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, changeNewMessage, changeNewText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 changeNewText={changeNewText}
                 addMessage={addMessage}
                 changeNewMessage={changeNewMessage}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree)