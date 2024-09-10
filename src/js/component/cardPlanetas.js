import React, {useState, useEffect, useContext} from "react";
import { Container, Button, Card, } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardPlanetas = ({ planeta, handleAgregarFavoritos })=>{
    const [detalle, setDetalle] = useState({})
    const [esFavorito, setEsFavorito] =useState(false);
    const { actions } = useContext(Context);

    useEffect(() => {
        const obtenerDetallePlanetas = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/planets/${planeta.uid}`, { method: "GET" })
                const data = await response.json()
                console.log(data.result.properties)
                    setDetalle(data.result.properties)
            } catch (error) {
            }
        }
        obtenerDetallePlanetas()
    }, [])

    const handleToggleFavorite = ()=>{
        setEsFavorito(!esFavorito);        
            actions.agregarAFavoritos(planeta.name);     
    }


    return(
        <Container>
           
                    <Card style={{ width: '18rem', margin: '10px', backgroundColor:'black' }}>
                        <Card.Img
                            variant="top"
                            src={planeta.uid == 1 ? `https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg` :`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg` }
                        />
                        <Card.Body style={{color:'white' }}>
                            <Card.Title>{planeta.name}</Card.Title>
                            <Card.Text >
                                <strong>Climate:</strong> {detalle.climate}<br />
                                <strong>Population:</strong> {detalle.population}<br />
                                <strong>Terrain:</strong> {detalle.terrain}
                            </Card.Text >

                            <div className="d-flex justify-content-between">
                                <Link to={`/detailPlanets/${planeta.uid}`}>
                                    <Button variant="danger">Learn more</Button>
                                </Link>
                                <Button variant="warning"onClick={handleToggleFavorite} >
                                    <FaHeart color={esFavorito ? 'red' : 'white'} /></Button>
                            </div>
                        </Card.Body>
                    </Card>
               
        </Container>
    )
}