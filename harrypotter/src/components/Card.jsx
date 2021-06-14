import React from 'react';

const colorsBackground = {
    Gryffindor: 'linear-gradient(358.61deg, #FF0000 4.67%, #FED482 96.97%)',
    Slytherin: 'linear-gradient(135deg, #1C792B 0%, #82E95E 100%)',
    Ravenclaw: 'linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)',
    Hufflepuff: 'linear-gradient(135deg, #FFC700 0%, #FFF388 100%)',
} 

function Card({customData}) {
    
    return (
      <div className='container'>
          {customData.map((character, index) => (
              <div className='cardMini' key={index}>
                  <div className='photo' style={{ background: colorsBackground[character.house] }}>
                      <img className='circule' src={character.image} alt='' /> 
                  </div>
                  <h2 className='name'> {character.name} </h2>
                  <div className='detail'>
                      <p>{character.alive ? 'VIVO' : 'FINADO'}<br/>
                      {character.hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}</p>
                  </div>
            </div>
          ))}  

      </div>
    );
  }
  
  export default Card; 