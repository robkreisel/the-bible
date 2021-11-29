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
      <div className="hidden">
        <NTDetails />
      </div>
      <div className="block">
        <OTChronological />
      </div>
    </div>
  );
}

export default App;
