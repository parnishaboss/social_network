import React from 'react';
import './App.css';

function App() {
  return (
      <div className='container'>
          <Header/>
          <div className='container_main'>
              <Sidebar/>
              <Content/>
          </div>
      </div>

  );
}

const Header = () => {
    return (
        <div className="Header">
            Hello, samurai! Let's go!
        </div>
    )
}
const Sidebar = () => {
    return (
        <div className="Sidebar">
            SIDESIDEBAR
        </div>
    )
}
const Content = () => {
    return (
        <div className="Content">
            MAINMAIN
        </div>
    )
}

export default App;
