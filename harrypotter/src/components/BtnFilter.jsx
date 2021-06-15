import { Button } from "react-bootstrap";

const BtnFilter = ({ handleView }) => {
  return (
    <div className="btnFilter">
      <Button
        bsPrefix="btnPurple"
        variant="outline"
        onClick={() => handleView("viewStudent")}
      >
        ESTUDIANTES
      </Button>
      <Button
        bsPrefix="btnPurple"
        variant="outline"
        onClick={() => handleView("viewStaff")}
      >
        STAFF
      </Button>
      <Button
        bsPrefix="btnPurple"
        variant="outline"
        onClick={() => handleView("viewAlive")}
      >
        VIVOS
      </Button>
    </div>
  );
};

export default BtnFilter;
