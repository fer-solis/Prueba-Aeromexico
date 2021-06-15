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
    status: "",
  });

  const save = () => {
    fetch("http://localhost:3001/data", {
      method: "POST",
      body: JSON.stringify(newCharacter),
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
      [e.target.status]: e.target.value,
    });
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title id="modalTitle">Agregar un personaje</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="dataCharacterContainer">
            <TextField
              className="addData"
              label="Nombre"
              variant="filled"
              name="name"
              onChange={addCharacter}
            />
            <TextField
              className="addData"
              label="Cumpleaños"
              type="date"
              variant="filled"
              name="date"
              onChange={addCharacter}
            />
            <TextField
              className="addData"
              label="Color de ojos"
              name="eyesColor"
              variant="filled"
              onChange={addCharacter}
            />
            <TextField
              className="addData"
              label="Color de pelo"
              name="hairColor"
              variant="filled"
              onChange={addCharacter}
            />
          </div>
          <div className="radio">
            <FormLabel className="text">GÉNERO</FormLabel>
            <RadioGroup
              className="radioGroup"
              name="gender"
              onChange={addCharacter}
            >
              <Radio color="primary" value="woman" /> Mujer
              <Radio color="primary" value="men" /> Hombre
            </RadioGroup>
            <FormLabel className="text">POSICIÓN</FormLabel>
            <RadioGroup
              className="radioGroup"
              name="position"
              onChange={addCharacter}
            >
              <Radio color="primary" value="staff" /> Staff
              <Radio color="primary" value="student" /> Estudiante
            </RadioGroup>
            <FormLabel className="text">ESTADO DE VIDA</FormLabel>
            <RadioGroup
              className="radioGroup"
              name="status"
              onChange={addCharacter}
            >
              <Radio color="primary" value="alive" /> Vivo
              <Radio color="primary" value="dead" /> Finado
            </RadioGroup>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          bsPrefix="btnSave"
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
