import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Navbar} from './Navbar/Navbar';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {stateType, storeType} from './redux/state';

type appType = {
    store: storeType
    // state: stateType
    // addPost: (postMessage: string) => void
    // changeNewText: (newText:string) => void
    // addMessage: (message:string) => void
    // changeNewMessage: (newText:string) => void
}


const App: React.FC<appType> = (props) => {
    const state = props.store.getState()
    return (
        <div className="container">
            <Header/>
            <div className="app__wrapper">
                <Navbar
                    state={state.sidebarPage}
                />
                <div className="app__wrapper__content">
                    <Route path="/profile" render={() =>
                        <Profile state={state.profilePage}
                                 addPost={props.store.addPost.bind(props.store)}
                                 changeNewText={props.store.changeNewText.bind(props.store)}
                        />}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            addMessage={props.store.addMessage.bind(props.store)}
                            changeNewMessage={props.store.changeNewMessage.bind(props.store)}
                            state={state.dialogsPage}
                        />}/>
                </div>
            </div>
        </div>
    );
}


export default App;
