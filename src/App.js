import React from 'react'
import MainArea from './Components/MainArea'
import BodyContent from './Components/BodyContent';
import {useState} from 'react';
import Backdrop from './Components/Backdrop';
import Sidedrawer from './Components/Sidedrawer';
import Navigation from './Components/Navigation';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div className='App'>
      <Navigation click={() => setSideToggle(true)}/>
      <Sidedrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle}  click={() => setSideToggle(false)}/>
      <MainArea/>
      <BodyContent/>
    </div>
  );
}

export default App;
