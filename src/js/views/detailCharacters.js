import React, { useEffect, useState } from "react";
import { Container, Card } from 'react-bootstrap';
import { useParams } from "react-router";

export const DetailCharacters = () => {
    const [detalle, setDetalle] = useState({});
    const { uid } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        const obtenerDetalle = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/people/${uid}`, { method: "GET" });
                const data = await response.json();
                setDetalle(data.result.properties);
                console.log(data);

                setCharacter(data.result);
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
                    style={{ width: '400px', height: '500px' }}
                    src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                />
                <Card.Body>
                    <Card.Title style={{ color: 'white', fontSize:"xx-large" }}>{character.properties?.name} </Card.Title> <br></br>
                    <Card.Text style={{ color: 'white', fontSize:"xx-large" }}>
                        {character.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="row justify-content-space-between">
                <div className="col">
                    <span className="detail-label">Gender: </span>
                    <span className="detail-value">{detalle.gender}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Hair Color: </span>
                    <span className="detail-value">{detalle.hair_color}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Eye Color: </span>
                    <span className="detail-value">{detalle.eye_color}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Mass: </span>
                    <span className="detail-value">{detalle.mass}</span>
                </div>
                <div className="col">
                    <span className="detail-label">Skin Color: </span>
                    <span className="detail-value">{detalle.skin_color}</span>
                </div>
            </div>
        </Container>

    )
}