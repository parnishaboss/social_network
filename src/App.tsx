import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Navbar} from './Navbar/Navbar';
import {Profile} from './Profile/Profile';
import {Dialogs, dialogsType, messagesType} from './Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {postType} from './Profile/MyPosts/Post/Post';

type appType = {
    posts: Array<postType>
    dialogs: Array<dialogsType>;
    messages: Array<messagesType>;
}


function App(props: appType) {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <div className="app__wrapper">
                    <Navbar/>
                    <div className="app__wrapper__content">
                        <Route path="/profile" render={() => <Profile
                            posts={props.posts}
                        />}/>
                        <Route path="/dialogs" render={() => <Dialogs
                            dialogs={props.dialogs}
                            messages={props.messages}/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
