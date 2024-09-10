

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes:[],
			planetas:[],
			vehiculos:[],
			favoritos: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			obtenerPersonajes: async ()=> {
				try {
					const response= await fetch("https://www.swapi.tech/api/people/", {method: "GET"})
					const data = await response.json()
					console.log(data.results);
					setStore({personajes: data.results});

				} catch (error) {
					
				}

			},
			obtenerPlanetas: async ()=>{
				try {
					const response= await fetch("https://www.swapi.tech/api/planets/", {method: "GET"})
					const data = await response.json()
					console.log(data.results);
					setStore({ planetas: data.results });
				} catch (error) {
				}
			},
			obtenerVehiculos: async ()=>{
				try {
					const response= await fetch("https://www.swapi.tech/api/vehicles/", {method: "GET"})
					const data = await response.json()
					console.log(data.results);
					setStore({ vehiculos: data.results });
				} catch (error) {
				}
			},

			agregarAFavoritos: (favorito) => {
				console.log(favorito);
			let store = getStore()
			if (!store.favoritos.includes(favorito)){
				setStore({favoritos:[...store.favoritos,favorito]})
			}	else{
				const filter = store.favoritos.filter((e)=>{
					return e != favorito 
				})
				setStore({favoritos:filter})
			}
			
			  },
			

			}
		}
	};


export default getState;
