import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { MenuNavbar } from "./component/menunavbar";
import { Footer } from "./component/footer";
import { DetailCharacters } from "./views/detailCharacters";
import {DetailPlanets} from "./views/detailPlanets";
import {DetailVehicles} from "./views/detailVehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MenuNavbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/detailCharacters/:uid" element={<DetailCharacters/>} />
						<Route path="/detailPlanets/:uid" element={<DetailPlanets/>} />
						<Route path="/detailVehiculo/:uid" element={<DetailVehicles/>} />

						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<div >
					<Footer  />
					</div>

					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
