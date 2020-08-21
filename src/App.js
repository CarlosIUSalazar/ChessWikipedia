import React from 'react';
import './App.css';

import Clock from 'react-live-clock';

function App() {
  return (
    <div className="App">
     <h1>Welcome to ChessWikipedia</h1>
     <h2>ReactJS Site hosted on AWS Amplify.</h2>
     <h3>The current time is <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /></h3>
    </div>
  );
}

export default App;
