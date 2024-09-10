import React, { useContext } from "react";
import { Container, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaHeart, FaTrash } from "react-icons/fa";
import { Context } from "../store/appContext";

export const MenuNavbar = () => {
  const { store } = useContext(Context);
  const { favoritos } = store;

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"
            width="100"
            height="80"
            className="d-inline-block align-top"
            alt="Star Wars logo"
          />
        </Navbar.Brand>

        <DropdownButton
          variant="warning"
          id="dropdown-basic-button"
          title=<strong> Favorites <FaHeart className="heart-icon" /></strong> >
          {favoritos.map((favorito, index) => {
            return <Dropdown.Item key={index}>
              {favorito}
              <FaTrash
                className="trash-icon"
                onClick={() => handleEliminarFavorito(favorito)}
              />
            </Dropdown.Item>;
          })}
        </DropdownButton>
      </Container>
    </Navbar>

  );
};
