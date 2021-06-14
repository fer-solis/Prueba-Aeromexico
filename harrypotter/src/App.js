import React, { useState } from "react";

import './scss/app.scss';
import Logo from './img/HarryPotter.png'
import BtnFilter from './components/BtnFilter';
import Card from './components/Card';

const customData = require('./data/hp-characters.json');
const students = require('./data/hp-students.json');
const staff = require('./data/hp-staff.json');

function App() {

  let [view, setView] = useState('characters');

  const handleView = (options) =>{
    setView(options);
  }
  
  return (
    <div className='App'>
      <div className='header'>
      <img src={Logo} className='logo' alt=''/>
      <p className='firstText'>Selecciona tu filtro</p>
      <BtnFilter handleView={handleView}/>
      </div>
      {(() => {
        if (view === 'characters') {
          return (
            <Card customData={customData}/>
          )
        } else if (view === 'viewStudent') {
          return (
            <Card customData={students} />
          )
        } else {
          return (
            <Card customData={staff} />
          )
        }
      })()}
      
    </div>
  );
}

export default App;
