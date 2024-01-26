import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Navbar} from './Navbar/Navbar';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <div className="app__wrapper">
                    <Navbar/>
                    <div className="app__wrapper__content">
                        <Route path="/profile" render={() => <Profile/>}/>
                        <Route path="/dialogs" render={() => <Dialogs/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
