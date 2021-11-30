import React from 'react';
import './App.css';
import OTDetails from './components/OTDetails';
import NTDetails from './components/NTDetails';
import OTChronological from './components/OTChronological';

function App() {
  return (
    <div>
      <div className="hidden">
        <OTDetails />
      </div>
      <div className="block">
        <NTDetails />
      </div>
      <div className="hidden">
        <OTChronological />
      </div>
    </div>
  );
}

export default App;
