import React, { useEffect, useState } from "react";
import { Container, Card } from 'react-bootstrap';
import { useParams } from "react-router";

export const DetailPlanets = () => {
    const [detalle, setDetalle] = useState({});
    const { uid } = useParams();
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        const obtenerDetalle = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`, { method: "GET" });
                const data = await response.json();
                setDetalle(data.result.properties);
                console.log(data);

                setPlanet(data.result);
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
                    style={{ width: '500px', height: '500px' }}
                    src={planet.uid == 1 ? `https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg` :`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg` }
                />
                <Card.Body>
                    <Card.Title style={{ color: 'white', fontSize: "xx-large" }}>{planet.properties?.name} </Card.Title> <br></br>
                    <Card.Text style={{ color: 'white', fontSize: "xx-large" }}>
                        {planet.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="row justify-content-space-between">
                <div className="col">
                    <span className="detail-label">Climate: </span>
                    <span className="detail-value">{detalle.climate}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Population: </span>
                    <span className="detail-value">{detalle.population}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Terrain: </span>
                    <span className="detail-value">{detalle.terrain}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Diameter: </span>
                    <span className="detail-value">{detalle.diameter}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Gravity: </span>
                    <span className="detail-value">{detalle.gravity}</span>
                </div>
            </div>
        </Container>

    )
}