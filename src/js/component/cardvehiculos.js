import React, { useEffect, useState, useContext } from "react";
import { Container, Button, Card, } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cardvehiculos = ({ vehiculo, handleAgregarFavoritos }) => {

    const [detalle, setDetalle] = useState({})
    const [esFavorito, setEsFavorito] = useState(false);
    const { actions } = useContext(Context);

    useEffect(() => {
        const obtenerDetalleVehiculo = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/vehicles/${vehiculo.uid}`, { method: "GET" })
                const data = await response.json()
                console.log(data.result.properties),
                    setDetalle(data.result.properties)
            } catch (error) {
            }
        }
        obtenerDetalleVehiculo()
    }, [])

    const handleToggleFavorito = () => {
        setEsFavorito(!esFavorito);
          actions.agregarAFavoritos(vehiculo.name);
        
      };

    return (
        <Container>

            <Card style={{ width: '18rem', margin: '10px', backgroundColor: 'black' }}>
                <Card.Img
                    variant="top"
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculo.uid}.jpg`}
                />
                <Card.Body style={{ color: 'white' }}>
                    <Card.Title>{vehiculo.name}</Card.Title>
                    <Card.Text >
                        <strong>Model:</strong> {detalle.model}<br />
                        <strong>Passengers:</strong> {detalle.passengers}<br />
                        <strong>Length:</strong> {detalle.length}
                    </Card.Text >

                    <div className="d-flex justify-content-between">
                        <Link to={`/detailVehiculo/${vehiculo.uid}`}>
                            <Button variant="danger">Learn more</Button>
                        </Link>
                        <Button variant="warning" onClick={handleToggleFavorito}>
                            <FaHeart color={esFavorito ? 'red' : 'white'} /></Button>
                    </div>
                </Card.Body>
            </Card>

        </Container>

    )
}

