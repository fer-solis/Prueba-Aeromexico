import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";

require("react-bootstrap/ModalHeader");

function NewModal(props) {
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    date: "",
    eyesColor: "",
    hairColor: "",
    gender: "",
    position: "",
  });

  const save = () => {
    fetch("http://localhost:3001/data", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(newCharacter), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  const addCharacter = (e) => {
    setNewCharacter({
      ...newCharacter,
      [e.target.name]: e.target.value,
      [e.target.date]: e.target.value,
      [e.target.eyesColor]: e.target.value,
      [e.target.hairColor]: e.target.value,
      [e.target.gender]: e.target.value,
      [e.target.position]: e.target.value,
    });
  };

  return (
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title id="modalTitle">Agregar un personaje</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="addContainer">
            <TextField
              className="addFact"
              id="filled-basic"
              label="Nombre"
              variant="filled"
              name="name"
              onChange={addCharacter}
            />
            <TextField
              className="addFact"
              id="filled-basic"
              type="date"
              variant="filled"
              name="date"
              onChange={addCharacter}
            />
            <TextField
              className="addFact"
              id="filled-basic"
              label="Color de ojos"
              name="eyesColor"
              variant="filled"
              onChange={addCharacter}
            />
            <TextField
              className="addFact"
              id="filled-basic"
              label="Color de pelo"
              name="hairColor"
              variant="filled"
              onChange={addCharacter}
            />
            <div className="radio">
              <FormLabel>GÉNERO</FormLabel>
              <RadioGroup name="gender" onChange={addCharacter}>
                <Radio value="woman" /> Mujer
                <Radio value="men" /> Hombre
              </RadioGroup>
              <FormLabel>POSICIÓN</FormLabel>
              <RadioGroup name="position" onChange={addCharacter}>
                <Radio value="student" /> Estudiante
                <Radio value="staff" /> Staff
              </RadioGroup>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="save"
          onClick={() => {
            save();
          }}
        >
          GUARDAR
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewModal;
