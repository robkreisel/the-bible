import React from 'react';
import './App.css';
import OTDetails from './components/OTDetails';
import NTDetails from './components/NTDetails';

function App() {
  return (
    <div>
      <div className="block">
        <OTDetails />
      </div>
      <div className="hidden">
        <NTDetails />
      </div>
    </div>
  );
}

export default App;
