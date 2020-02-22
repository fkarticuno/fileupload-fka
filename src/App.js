import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather/Weather'
import Images from './components/Images/Images'
function App() {
  return (
    <>
    <div className="container">
      <Weather />
      <Images />
    </div>
    </>
  );
}

export default App;
