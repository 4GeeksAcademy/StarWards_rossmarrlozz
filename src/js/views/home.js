import React from "react";
import { Container} from "react-bootstrap";
import { Personajes } from "../component/personajes";
import { Planetas } from "../component/planetas";
import { Vehiculos } from "../component/vehiculos";
import { Footer } from "../component/footer";
import "../../styles/home.css";

export const Home = () => {
	return (
		<Container>
				<Personajes />
				<Planetas />
				<Vehiculos />
		</Container>
	)
}
