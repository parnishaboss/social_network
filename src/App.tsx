import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Navbar} from './Navbar/Navbar';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';

function App() {
  return (
      <div className='container'>
          <Header/>
          <div className='app__wrapper'>
              <Navbar/>
              <div className='app__wrapper__content'>
                  {/*<Profile/>*/}
                  <Dialogs/>
              </div>
          </div>
      </div>

  );
}





export default App;
