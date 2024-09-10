import React, {useEffect, useState} from "react";
import {Container, Card} from 'react-bootstrap';
import { useParams } from "react-router";

export const DetailVehicles = () => {
    const [detalle, setDetalle] = useState({});
    const { uid } = useParams();
    const [vehiculo, setVehiculo] = useState({})

    useEffect(() => {
        const obtenerDetalle = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`, { method: "GET" });
                const data = await response.json();
                setDetalle(data.result.properties);
                console.log(data);

                setVehiculo(data.result);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        obtenerDetalle();
    }, [uid]);




    return (
        <Container>
                       <Card className="d-flex flex-row" style={{ backgroundColor: 'black' }}>
                <Card.Img
                    variant="left"
                    style={{ width: '400px', height: '400px' }}
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                />
                <Card.Body>
                    <Card.Title style={{ color: 'white', fontSize:"xx-large" }}>{vehiculo.properties?.name} </Card.Title> <br></br>
                    <Card.Text style={{ color: 'white', fontSize:"xx-large" }}>
                        {vehiculo.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="row justify-content-space-between">
                <div className="col">
                    <span className="detail-label">Model: </span>
                    <span className="detail-value">{detalle.model}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Passengers: </span>
                    <span className="detail-value">{detalle.passengers}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Length: </span>
                    <span className="detail-value">{detalle.length}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Crew: </span>
                    <span className="detail-value">{detalle.crew}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Manufacturer: </span>
                    <span className="detail-value">{detalle.manufacturer}</span>
                </div>
            </div>

        </Container>

    )
}

