import React, { useEffect, useState, useContext } from "react";
import { Container, Button, Card } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cardpersonajes =  ({ persona, handleAgregarFavoritos }) => {
  const [detalle, setDetalle] = useState({});
  const [esFavorito, setEsFavorito] = useState(false);
  const { actions } = useContext(Context);


  useEffect(() => {
    const obtenerDetalle = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${persona.uid}`, { method: "GET" });
        const data = await response.json();
        setDetalle(data.result.properties);
      } catch (error) {
        
      }
    };
    obtenerDetalle();
  }, []);

  const handleToggleFavorito = () => {
    setEsFavorito(!esFavorito);
      actions.agregarAFavoritos(persona.name);
    
  };

  return (
    <Container>
      <Card style={{ width: '18rem', margin: '10px', backgroundColor: 'black' }}>
        <Card.Img
          variant="top"
          src={`https://starwars-visualguide.com/assets/img/characters/${persona.uid}.jpg`}
        />
        <Card.Body style={{ color: 'white' }}>
          <Card.Title>{persona.name}</Card.Title>
          <Card.Text>
            <strong>Gender:</strong> {detalle.gender}<br />
            <strong>Hair Color:</strong> {detalle.hair_color}<br />
            <strong>Eye Color:</strong> {detalle.eye_color}
          </Card.Text>

          <div className="d-flex justify-content-between">
            <Link to={`/detailCharacters/${persona.uid}`}>
              <Button variant="danger">Learn more</Button>
            </Link>
            <Button variant="warning" onClick={handleToggleFavorito}>            
              <FaHeart color={esFavorito ? 'red' : 'white'} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};