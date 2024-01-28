import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Navbar} from './Navbar/Navbar';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {stateType} from './redux/state';

type appType = {
    state: stateType
}


const App: React.FC<appType> = (props) => {
    return (
        <div className="container">
            <Header/>
            <div className="app__wrapper">
                <Navbar state={props.state.sidebarPage}/>
                <div className="app__wrapper__content">
                    <Route path="/profile" render={() => <Profile
                        state={props.state.profilePage}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs
                        state={props.state.dialogsPage}
                    />}/>
                </div>
            </div>
        </div>
    );
}


export default App;
