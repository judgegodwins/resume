import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

import './scss/styles.scss';
import TopBar from './components/TopBar';
import Alert from './components/Alert';
import HomeTab from './components/HomeTab';
import Work from './components/Work';
import Contact from './components/Contact';

console.log(process.env.REACT_APP_API)

function App(props) {
  const [status, setStatus] = useState('idle');

  return (
    <div className="app">
      <TopBar />
      <Alert
        status={status}
      />
      <HomeTab />
      <Work type="work"  bottomLiner />
      <Work type="projects" bottomLiner />
      <Work type="education" />
      <Contact style={{marginTop: 50}}status={status} setStatus={setStatus}/>
    </div>
  );
}

export default App;