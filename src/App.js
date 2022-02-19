import React from "react";
import "./App.css";
import OTDetails from "./components/OTDetails";
import NTDetails from "./components/NTDetails";
import OTChronological from "./components/OTChronological";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
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
