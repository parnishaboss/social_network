import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewText, stateType} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


export const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 changeNewText={changeNewText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}