import { Dropdown } from "react-bootstrap";
import { BsBookmarkFill, BsFillTrashFill } from "react-icons/bs";
const BtnFavorites = () => {
  return (
    <div>
      <Dropdown bsPrefix="btnPurpleDos">
        <Dropdown.Toggle bsPrefix="btnPurpleDos" id="dropdown-basic">
          FAVORITOS <BsBookmarkFill className="icons" />
        </Dropdown.Toggle>

        <Dropdown.Menu id="options">
          <Dropdown.Item
            style={{
              color: "white",
            }}
            href="#/action-1"
          >
            Favorito 1 <BsFillTrashFill />
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              color: "white",
            }}
            href="#/action-2"
          >
            Favorito 2 <BsFillTrashFill />
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              color: "white",
            }}
            href="#/action-3"
          >
            Favorito 3 <BsFillTrashFill />
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              color: "white",
            }}
            href="#/action-4"
          >
            Favorito 4 <BsFillTrashFill />
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              color: "white",
            }}
            href="#/action-5"
          >
            Favorito 5 <BsFillTrashFill />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default BtnFavorites;
