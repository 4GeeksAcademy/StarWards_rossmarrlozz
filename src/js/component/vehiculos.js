import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Cardvehiculos } from "./cardvehiculos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Vehiculos = () => {
    const { store, actions } = useContext(Context)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Container>
            <h1 style={{ color: "#FFD700" }}>Vehicles</h1>
            <Carousel responsive={responsive}>
                {store.vehiculos.map((vehiculo) => (
                    <Cardvehiculos key={vehiculo.uid} vehiculo={vehiculo} />
                ))}
            </Carousel>
        </Container>
    )
}