import React from 'react';
import './App.css';
import OTDetails from './components/OTDetails';
import NTDetails from './components/NTDetails';
import OTChronological from './components/OTChronological';

function App() {
  return (
    <div>
      <div className="block">
        <OTDetails />
      </div>
      <div className="hidden">
        <NTDetails />
      </div>
      <div className="hidden">
        <OTChronological />
      </div>
    </div>
  );
}

export default App;
