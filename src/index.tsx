import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {message: 'first post', likesCount: 21},
    {message: 'second post', likesCount: 42},
    {message: 'third post', likesCount: 12},
]
let dialogs = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Misha'},
    {id: 4, name: 'Vasya'},
    {id: 5, name: 'Kolya'},
]
let messages = [
    {id: 1, message: 'Privet'},
    {id: 2, message: 'How are you '},
    {id: 3, message: 'I am from London !'}
]

ReactDOM.render(
    <App
        posts={posts}
        dialogs={dialogs}
        messages={messages}
    />,
    document.getElementById('root')
);