import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

require('react-bootstrap/ModalHeader');

function NewModal(props) {
    
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    birthday: '',
    eyesColor: '',
    hairColor: '',
    woman: '',
    men: '',
    student: '',
    staff: '',
    image: '',
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewCharacter({
      ...newCharacter,
      [e.target.name]: e.target.value,
      [e.target.birthday]: e.target.value,
      [e.target.eyesColor]: e.target.value,
      [e.target.hairColor]: e.target.value,
      [e.target.woman]: e.target.value,
      [e.target.men]: e.target.value,
      [e.target.student]: e.target.value,
      [e.target.staff]: e.target.value,
      [e.target.image]: e.target.files,
    });
  };

  return (
    <Modal
      {...props}
      centered
    >
      <Modal.Header>
        <Modal.Title id='modalTitle'>
          Agregar un personaje
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className='addContainer'>
            <TextField className='addFact' id='filled-basic' label='Nombre' variant='filled' onChange={handleInputChange}/>
            <TextField className='addFact' id='filled-basic' type='date'  variant='filled' onChange={handleInputChange}/>
            <TextField className='addFact' id='filled-basic' label='Color de ojos' variant='filled' onChange={handleInputChange}/>
            <TextField className='addFact' id='filled-basic' label='Color de pelo' variant='filled' onChange={handleInputChange}/>
                <div className='radio'>
                <FormLabel >GÉNERO</FormLabel>
                <RadioGroup aria-label="gender" name="gender" onChange={handleInputChange}>
                    <FormControlLabel value="woman" control={<Radio />} label="Mujer" />
                    <FormControlLabel value="men" control={<Radio />} label="Hombre" />
                </RadioGroup>
                <FormLabel >POSICIÓN</FormLabel>
                <RadioGroup aria-label="position" name="position" onChange={handleInputChange}>
                    <FormControlLabel value="student" control={<Radio />} label="Estudiante" />
                    <FormControlLabel value="staff" control={<Radio />} label="Staff" />
                </RadioGroup>
                </div>
          </div>
          <div className='btnFile'>
            <label className='check' htmlFor='file'>FOTOGRAFÍA</label>
            <input className='FileBtn' type='file' name='image' />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='save' onClick={props.onHide}>
          GUARDAR
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewModal;