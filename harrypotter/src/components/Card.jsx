import React from 'react';

function Card({customData}) {
    console.log(customData);
    
    
    return (
      <div className='Card'>
          {customData.map((character, index) => (
              <div key={index}>
            {/* <img src={character.image} alt='' /> */}
            <h1>  name: {character.name} </h1>
            <h2>Estado: {character.alive ? 'vivo' : 'muerto'}</h2>
            <h2>Profesion: {character.hogwartsStudent ? 'estudiante' : 'profesor'}</h2>
            </div>
          ))}  

      </div>
    );
  }
  
  export default Card; 