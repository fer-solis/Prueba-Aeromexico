import React, { useState } from "react";
import { Button, ButtonGroup } from 'react-bootstrap';
import { BsBookmarkFill, BsPersonPlusFill } from "react-icons/bs";

import './scss/app.scss';
import Logo from './img/HarryPotter.png'
import BtnFilter from './components/BtnFilter';
import Card from './components/Card';
import NewModal from './components/Modal';

const customData = require('./data/hp-characters.json');
const students = require('./data/hp-students.json');
const staff = require('./data/hp-staff.json');

function App() {

  const [view, setView] = useState('characters');
  const [modalShow, setModalShow] = useState(false);

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
      <div className='btnOptions'>
      <ButtonGroup >
        <Button bsPrefix='btnPurpleDos'>FAVORITOS <BsBookmarkFill className='icons'/></Button>
        <Button bsPrefix='btnPurpleDos' onClick={() => setModalShow(true)}>AGREGAR <BsPersonPlusFill className='icons'/></Button>
        <NewModal show={modalShow} onHide={() => setModalShow(false)} />
      </ButtonGroup>

      </div>
      
    </div>
  );
}

export default App;
