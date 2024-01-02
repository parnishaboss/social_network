import React from 'react';
import './App.css';
import {Header} from './Header';
import {Sidebar} from './Sidebar';

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



const Content = () => {
    return (
        <div className="Content">
            <div>
                <img src="https://bogatyr.club/uploads/posts/2021-11/thumbs/1636964350_6-bogatyr-club-p-krasivii-fon-goroda-6.jpg" alt=""/>
            </div>
            <div>ava + discription</div>
            <div>
                My posts
                <div>
                    NEW POST
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>


        </div>
    )
}

export default App;
