import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Navbar} from './Navbar/Navbar';
import {Profile} from './Profile/Profile';

function App() {
  return (
      <div className='container'>
          <Header/>
          <div className='container_main'>
              <Navbar/>
              <Profile/>
          </div>
      </div>

  );
}





export default App;
