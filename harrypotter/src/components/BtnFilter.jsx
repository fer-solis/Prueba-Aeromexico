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
    </div>
  );
};

export default BtnFilter;
