import React from 'react';

import './scss/bootstrap.scss';
import './scss/app.scss';
import Logo from './img/HarryPotter.png'

function App() {
  return (
    <div className='App'>
      <div className='header'>
      <img src={Logo} className='logo' alt=''/>
      <p className='firstText'>Selecciona tu filtro</p>
      </div>
    </div>
  );
}

export default App;
