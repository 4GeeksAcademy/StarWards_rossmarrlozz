import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Cardpersonajes } from "./cardpersonajes"
import { Context } from "../store/appContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Personajes = () => {

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
            <h1 style={{ color: "#FFD700" }}>Characters</h1>
             <Carousel responsive={responsive}>
                {store.personajes.map((persona) => (
                    <Cardpersonajes key={persona.uid} persona={persona} />
                ))}
            </Carousel>
        </Container>

    )
}