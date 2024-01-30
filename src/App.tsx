import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Navbar} from './Navbar/Navbar';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {storeType} from './redux/state';

type appType = {
    store: storeType
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
                        <Profile
                            state={state.profilePage}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />}/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            dispatch={props.store.dispatch.bind(props.store)}
                            state={state.dialogsPage}
                        />}/>
                </div>
            </div>
        </div>
    );
}


export default App;
